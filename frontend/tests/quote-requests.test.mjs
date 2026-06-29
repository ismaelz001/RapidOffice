import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('..', import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('quote request API route validates and persists leads server-side', async () => {
  const routeUrl = new URL('app/api/quote-requests/route.ts', root);
  assert.equal(existsSync(routeUrl), true, 'quote request API route is missing');

  const routeSource = await read('app/api/quote-requests/route.ts');

  assert.match(routeSource, /export async function POST/);
  assert.match(routeSource, /DATABASE_URL/);
  assert.match(routeSource, /quote_requests/);
  assert.match(routeSource, /customer_name/);
  assert.match(routeSource, /email/);
  assert.match(routeSource, /phone/);
  assert.match(routeSource, /source/);
  assert.match(routeSource, /message/);
  assert.match(routeSource, /NextResponse\.json/);
});

test('quote request form is reusable and posts to the API route', async () => {
  const formUrl = new URL('components/QuoteRequestForm.tsx', root);
  assert.equal(existsSync(formUrl), true, 'quote request form component is missing');

  const formSource = await read('components/QuoteRequestForm.tsx');

  assert.match(formSource, /'use client'/);
  assert.match(formSource, /fetch\('\/api\/quote-requests'/);
  assert.match(formSource, /source/);
  assert.match(formSource, /customerName/);
  assert.match(formSource, /success/i);
  assert.match(formSource, /error/i);
});

test('home and category pages use the real quote request form', async () => {
  const homeSource = await read('app/page.tsx');
  const categorySource = await read('app/mobiliario/[category]/page.tsx');

  assert.match(homeSource, /QuoteRequestForm/);
  assert.match(homeSource, /source="home"/);
  assert.doesNotMatch(homeSource, /onSubmit=\{e => e\.preventDefault\(\)\}/);

  assert.match(categorySource, /QuoteRequestForm/);
  assert.match(categorySource, /source=\{isRefurbishedView \? 'refurbished' : 'category'\}/);
  assert.doesNotMatch(categorySource, /type="button" className="bg-ofi-black/);
});

test('planner submits its configuration as a quote request', async () => {
  const plannerSource = await read('public/planifica-tu-espacio/index.html');

  assert.match(plannerSource, /fetch\('\/api\/quote-requests'/);
  assert.match(plannerSource, /source:\s*'planner'/);
  assert.match(plannerSource, /customerName:\s*state\.contacto\.nombre/);
  assert.match(plannerSource, /phone:\s*state\.contacto\.telefono/);
  assert.match(plannerSource, /buildPlannerQuoteMessage/);
  assert.match(plannerSource, /function calculatePrices\(\)/);
  assert.doesNotMatch(plannerSource, /state\.reunion\.personas/);
  assert.match(plannerSource, /localStorage\.setItem\('ofi_config'/);
  assert.match(plannerSource, /result-request-id/);
});

test('selected catalogue products are persisted as quote request items', async () => {
  const routeSource = await read('app/api/quote-requests/route.ts');
  const formSource = await read('components/QuoteRequestForm.tsx');
  const categorySource = await read('app/mobiliario/[category]/page.tsx');
  const catalogPageSource = await read('app/mobiliario/page.tsx');

  assert.match(routeSource, /quote_request_items/);
  assert.match(routeSource, /catalog_products/);
  assert.match(routeSource, /sql\.begin/);
  assert.match(routeSource, /quantity/);
  assert.match(formSource, /items:/);
  assert.match(formSource, /name="quantity"/);
  assert.match(categorySource, /searchParams\?\.producto/);
  assert.match(categorySource, /source=\{isRefurbishedView \? 'refurbished' : 'category'\}/);
  assert.match(catalogPageSource, /getQuoteRequestHref/);
});

test('transactional emails are prepared but disabled without company setup', async () => {
  const emailUrl = new URL('lib/email/quote-request-email.ts', root);
  assert.equal(existsSync(emailUrl), true, 'quote request email module is missing');

  const emailSource = await read('lib/email/quote-request-email.ts');
  const routeSource = await read('app/api/quote-requests/route.ts');
  const envExample = await read('.env.example');

  assert.match(emailSource, /RESEND_API_KEY/);
  assert.match(emailSource, /EMAIL_FROM/);
  assert.match(emailSource, /SALES_NOTIFICATION_EMAIL/);
  assert.match(emailSource, /Idempotency-Key/);
  assert.match(emailSource, /https:\/\/api\.resend\.com\/emails/);
  assert.match(routeSource, /sendQuoteRequestEmails/);
  assert.match(envExample, /RESEND_API_KEY=/);
  assert.match(envExample, /EMAIL_FROM=/);
  assert.match(envExample, /SALES_NOTIFICATION_EMAIL=/);
});

test('public quote endpoint limits payload size and rejects the honeypot', async () => {
  const routeSource = await read('app/api/quote-requests/route.ts');
  const formSource = await read('components/QuoteRequestForm.tsx');

  assert.match(routeSource, /request\.text\(\)/);
  assert.match(routeSource, /status:\s*413/);
  assert.match(routeSource, /payload\.website/);
  assert.match(formSource, /name="website"/);
  assert.match(formSource, /aria-hidden="true"/);
});
