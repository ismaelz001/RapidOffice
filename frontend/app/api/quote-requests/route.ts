import { NextResponse } from 'next/server';
import postgres from 'postgres';

export const runtime = 'nodejs';

const ALLOWED_SOURCES = new Set([
  'home',
  'catalog',
  'category',
  'refurbished',
  'planner',
]);

type QuoteRequestPayload = {
  customerName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  source?: unknown;
  context?: unknown;
  pageUrl?: unknown;
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

export async function POST(request: Request) {
  let payload: QuoteRequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Solicitud no válida.' }, { status: 400 });
  }

  const customerName = cleanText(payload.customerName, 160);
  const email = cleanText(payload.email, 240);
  const phone = cleanText(payload.phone, 80);
  const company = cleanText(payload.company, 160);
  const source = normalizeSource(payload.source);
  const message = buildMessage(payload);

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
    const rows = await sql<{ id: string }[]>`
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
