import { NextResponse } from 'next/server';
import postgres from 'postgres';
import { sendQuoteRequestEmails } from '@/lib/email/quote-request-email';

export const runtime = 'nodejs';

const ALLOWED_SOURCES = new Set([
  'home',
  'catalog',
  'category',
  'refurbished',
  'planner',
]);
const MAX_BODY_LENGTH = 20_000;

type QuoteRequestPayload = {
  customerName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  source?: unknown;
  context?: unknown;
  pageUrl?: unknown;
  items?: unknown;
  website?: unknown;
};

type NormalizedItem = {
  sku: string;
  quantity: number;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function normalizeSource(value: unknown) {
  const source = cleanText(value, 40);
  return ALLOWED_SOURCES.has(source) ? source : 'catalog';
}

function buildMessage(payload: QuoteRequestPayload) {
  const message = cleanText(payload.message, 2000);
  const context = cleanText(payload.context, 500);
  const pageUrl = cleanText(payload.pageUrl, 500);
  const parts = [
    message,
    context ? `Contexto: ${context}` : '',
    pageUrl ? `URL origen: ${pageUrl}` : '',
  ].filter(Boolean);

  return parts.join('\n\n');
}

function normalizeItems(value: unknown): NormalizedItem[] {
  if (!Array.isArray(value)) return [];

  const quantities = new Map<string, number>();
  for (const rawItem of value.slice(0, 20)) {
    if (!rawItem || typeof rawItem !== 'object') continue;
    const item = rawItem as { sku?: unknown; quantity?: unknown };
    const sku = cleanText(item.sku, 80);
    const quantity = Number(item.quantity);
    if (!sku || !Number.isInteger(quantity) || quantity < 1 || quantity > 100) continue;
    quantities.set(sku, Math.min((quantities.get(sku) ?? 0) + quantity, 100));
  }

  return Array.from(quantities.entries()).map(([sku, quantity]) => ({ sku, quantity }));
}

export async function POST(request: Request) {
  let payload: QuoteRequestPayload;

  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > MAX_BODY_LENGTH) {
      return NextResponse.json({ ok: false, error: 'Solicitud demasiado grande.' }, { status: 413 });
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_LENGTH) {
      return NextResponse.json({ ok: false, error: 'Solicitud demasiado grande.' }, { status: 413 });
    }

    payload = JSON.parse(rawBody) as QuoteRequestPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Solicitud no válida.' }, { status: 400 });
  }

  if (cleanText(payload.website, 200)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const customerName = cleanText(payload.customerName, 160);
  const email = cleanText(payload.email, 240);
  const phone = cleanText(payload.phone, 80);
  const company = cleanText(payload.company, 160);
  const source = normalizeSource(payload.source);
  const message = buildMessage(payload);
  const items = normalizeItems(payload.items);

  if (!customerName || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: 'Indica tu nombre y al menos un email o teléfono.' },
      { status: 400 },
    );
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return NextResponse.json(
      { ok: false, error: 'El servicio de solicitudes no está configurado.' },
      { status: 503 },
    );
  }

  const sql = postgres(connectionString, { prepare: false });

  try {
    const productRows = items.length
      ? await sql<{ id: string; sku: string }[]>`
          select id, sku
          from public.catalog_products
          where status = 'active' and sku in ${sql(items.map((item) => item.sku))}
        `
      : [];

    if (productRows.length !== items.length) {
      return NextResponse.json(
        { ok: false, error: 'Alguno de los productos seleccionados ya no está disponible.' },
        { status: 400 },
      );
    }

    const productIds = new Map(productRows.map((product) => [product.sku, product.id]));
    const rows = await sql.begin(async (transaction) => {
      const requestRows = await transaction<{ id: string }[]>`
        insert into public.quote_requests (
          customer_name,
          email,
          phone,
          company,
          message,
          source
        )
        values (
          ${customerName},
          ${email || null},
          ${phone || null},
          ${company || null},
          ${message || null},
          ${source}
        )
        returning id
      `;
      const quoteRequestId = requestRows[0]?.id;

      for (const item of items) {
        const productId = productIds.get(item.sku);
        if (!quoteRequestId || !productId) {
          throw new Error('Quote request item could not be resolved');
        }

        await transaction`
          insert into public.quote_request_items (
            quote_request_id,
            product_id,
            quantity
          )
          values (
            ${quoteRequestId},
            ${productId},
            ${item.quantity}
          )
        `;
      }

      return requestRows;
    });

    const quoteRequestId = rows[0]?.id;
    if (quoteRequestId) {
      try {
        await sendQuoteRequestEmails({
          requestId: quoteRequestId,
          customerName,
          customerEmail: email || undefined,
          customerPhone: phone || undefined,
          company: company || undefined,
          message: message || undefined,
          source,
        });
      } catch (error) {
        console.error('quote_request_email_failed', {
          requestId: quoteRequestId,
          error: error instanceof Error ? error.message : 'unknown_error',
        });
      }
    }

    return NextResponse.json({ ok: true, id: rows[0]?.id }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'No hemos podido registrar la solicitud. Inténtalo de nuevo.' },
      { status: 500 },
    );
  } finally {
    await sql.end({ timeout: 1 });
  }
}
