import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const landingSource = await readFile(
  new URL('../app/page.tsx', import.meta.url),
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
});
