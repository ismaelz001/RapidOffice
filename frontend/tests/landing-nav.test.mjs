import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const landingSource = await readFile(
  new URL('../app/page.tsx', import.meta.url),
  'utf8',
);
const nextConfigSource = await readFile(
  new URL('../next.config.js', import.meta.url),
  'utf8',
);

test('shows Reacondicionado as a visible primary navigation item', () => {
  assert.match(
    landingSource,
    /href="\/mobiliario\/reacondicionado"[^>]*>\s*Reacondicionado\s*<\/a>/,
  );
});

test('uses the planning CTA in the top navigation and hero', () => {
  const matches = landingSource.match(/Planifica tu espacio de trabajo/g) ?? [];
  assert.ok(matches.length >= 2, `expected at least 2 planning CTAs, found ${matches.length}`);

  const plannerLinks = landingSource.match(/href="\/planifica-tu-espacio\/"/g) ?? [];
  assert.equal(plannerLinks.length, 2);
});

test('publishes the planner preview with the approved static assets', async () => {
  const publishedUrl = new URL(
    '../public/planifica-tu-espacio/index.html',
    import.meta.url,
  );

  assert.equal(existsSync(publishedUrl), true, 'published planner HTML is missing');

  const published = (await readFile(publishedUrl, 'utf8')).replaceAll('\r\n', '\n');

  assert.match(published, /<title>Planifica tu Oficina — Ofiponiente<\/title>/);
  assert.match(published, /src="\/logo\.png"/);
  assert.doesNotMatch(published, /\.\.\/frontend\/public\/logo\.png/);
});

test('planner preview includes a visible link back to the home page', async () => {
  const published = await readFile(
    new URL('../public/planifica-tu-espacio/index.html', import.meta.url),
    'utf8',
  );

  assert.match(published, /href="\/"/);
  assert.match(published, /Volver a Ofiponiente/);
});

test('planner preview does not show price estimates in the first steps', async () => {
  const published = await readFile(
    new URL('../public/planifica-tu-espacio/index.html', import.meta.url),
    'utf8',
  );

  assert.doesNotMatch(
    published,
    /function startConfigurator\(\)[\s\S]*?price-ticker'\)\.style\.display = 'flex'[\s\S]*?}/,
  );
  assert.match(published, /function syncPriceVisibility\(step\)/);
  assert.match(published, /step >= 6/);
});

test('serves the planner preview from the clean public URL', () => {
  assert.match(nextConfigSource, /source:\s*["']\/planifica-tu-espacio["']/);
  assert.match(
    nextConfigSource,
    /destination:\s*["']\/planifica-tu-espacio\/index\.html["']/,
  );
});
