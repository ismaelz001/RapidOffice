import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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
    /href="#contacto"[^>]*>\s*Reacondicionado\s*<\/a>/,
  );
});

test('uses the planning CTA in the top navigation and hero', () => {
  const matches = landingSource.match(/Planifica tu espacio de trabajo/g) ?? [];
  assert.ok(matches.length >= 2, `expected at least 2 planning CTAs, found ${matches.length}`);

  const plannerLinks = landingSource.match(/href="\/planifica-tu-espacio\/"/g) ?? [];
  assert.equal(plannerLinks.length, 2);
});

test('publishes the approved planner preview without design changes', async () => {
  const publishedUrl = new URL(
    '../public/planifica-tu-espacio/index.html',
    import.meta.url,
  );

  assert.equal(existsSync(publishedUrl), true, 'published planner HTML is missing');

  const published = (await readFile(publishedUrl, 'utf8')).replaceAll('\r\n', '\n');
  const checksum = createHash('sha256').update(published).digest('hex');

  assert.equal(
    checksum,
    '96ed613a121b867067ceca27c813470d4bf333dc6546ab151481f1c48fd4a11a',
  );
  assert.doesNotMatch(published, /\.\.\/frontend\/public\/logo\.png/);
});

test('serves the planner preview from the clean public URL', () => {
  assert.match(nextConfigSource, /source:\s*["']\/planifica-tu-espacio["']/);
  assert.match(
    nextConfigSource,
    /destination:\s*["']\/planifica-tu-espacio\/index\.html["']/,
  );
});
