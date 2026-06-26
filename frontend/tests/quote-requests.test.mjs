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
  assert.match(categorySource, /source="category"/);
  assert.doesNotMatch(categorySource, /type="button" className="bg-ofi-black/);
});

