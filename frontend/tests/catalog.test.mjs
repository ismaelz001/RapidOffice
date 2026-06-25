import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('..', import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('home category cards link to catalogue category pages', async () => {
  const landingSource = await read('app/page.tsx');

  for (const href of [
    '/mobiliario/sillas',
    '/mobiliario/mesas-escritorios',
    '/mobiliario/salas-colectividades',
    '/mobiliario/almacenaje-archivo',
    '/mobiliario/divisiones',
    '/mobiliario/complementos',
  ]) {
    assert.match(landingSource, new RegExp(`href: '${href}'`));
  }

  assert.doesNotMatch(landingSource, />\s*Colectividades\s*</);
  assert.match(landingSource, /title: 'Salas y colectividades'/);
  assert.match(landingSource, /title: 'Almacenaje y archivo'/);
});

test('catalogue pages and data model exist', async () => {
  assert.equal(existsSync(new URL('app/mobiliario/page.tsx', root)), true);
  assert.equal(existsSync(new URL('app/mobiliario/[category]/page.tsx', root)), true);
  assert.equal(existsSync(new URL('lib/catalog.ts', root)), true);

  const catalogSource = await read('lib/catalog.ts');

  for (const slug of [
    'sillas',
    'mesas-escritorios',
    'salas-colectividades',
    'almacenaje-archivo',
    'divisiones',
    'complementos',
    'reacondicionado',
  ]) {
    assert.match(catalogSource, new RegExp(`slug: '${slug}'`));
  }

  const productCount = (catalogSource.match(/sku: '/g) ?? []).length;
  assert.ok(productCount >= 21, `expected at least 21 seed products, found ${productCount}`);
  assert.doesNotMatch(catalogSource, /Comprar/);
  assert.match(catalogSource, /Añadir a presupuesto/);
});

test('refurbished catalogue can be filtered by the same product families', async () => {
  const categoryPage = await read('app/mobiliario/[category]/page.tsx');
  const catalogSource = await read('lib/catalog.ts');

  assert.match(catalogSource, /refurbishedFilterCategories/);
  assert.match(catalogSource, /getRefurbishedProducts/);

  for (const family of [
    'sillas',
    'mesas-escritorios',
    'salas-colectividades',
    'almacenaje-archivo',
    'divisiones',
    'complementos',
  ]) {
    assert.match(catalogSource, new RegExp(`slug: '${family}'`));
  }

  assert.match(categoryPage, /\/mobiliario\/reacondicionado\?familia=\$\{item\.slug\}/);
  assert.match(categoryPage, /Filtrar reacondicionado por familia/);
  assert.match(categoryPage, /searchParams/);
  assert.match(categoryPage, /familia/);
});

test('Supabase catalogue migration is additive and idempotent', async () => {
  const migrationUrl = new URL('../supabase/migrations/20260625_catalog.sql', root);
  assert.equal(existsSync(migrationUrl), true, 'catalogue migration is missing');

  const migration = await read('../supabase/migrations/20260625_catalog.sql');

  for (const table of [
    'catalog_categories',
    'catalog_products',
    'catalog_product_images',
    'quote_requests',
    'quote_request_items',
  ]) {
    assert.match(migration, new RegExp(`create table if not exists public\\.${table}`));
  }

  assert.match(migration, /on conflict \(slug\) do update/i);
  assert.match(migration, /on conflict \(sku\) do update/i);
  assert.match(migration, /create index if not exists/i);

  const skuCount = (migration.match(/RO-[A-Z]{3}-\d{3}/g) ?? []).length;
  assert.ok(skuCount >= 21, `expected at least 21 seeded SKUs, found ${skuCount}`);
  assert.match(migration, /\('RO-REA-001'[\s\S]*'sillas'/);
  assert.match(migration, /\('RO-REA-002'[\s\S]*'mesas-escritorios'/);
  assert.match(migration, /\('RO-REA-003'[\s\S]*'almacenaje-archivo'/);
});
