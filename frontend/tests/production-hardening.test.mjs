import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('..', import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('production home contains no demo credentials or fictitious contact data', async () => {
  const homeSource = await read('app/page.tsx');
  const loginSource = await read('app/(auth)/login/page.tsx');

  assert.doesNotMatch(homeSource, /Acceso CRM|href="\/login"|C\/ Ejemplo|950 000 000/);
  assert.doesNotMatch(loginSource, /admin1|josema|ismael|ofi-admin-auth/);
  assert.match(loginSource, /redirect\('\/'\)/);
});

test('legacy application routes are not exposed as working production tools', async () => {
  const routes = [
    'app/admin/page.tsx',
    'app/(app)/projects/page.tsx',
    'app/(app)/editor/[id]/page.tsx',
    'app/share/[token]/page.tsx',
  ];

  for (const route of routes) {
    const source = await read(route);
    assert.match(source, /redirect\('\/'\)/, `${route} must redirect to the public home`);
    assert.doesNotMatch(source, /'use client'/, `${route} must not ship a legacy client bundle`);
  }
});

test('production has an application icon and no obsolete Render deployment file', async () => {
  assert.equal(existsSync(new URL('app/icon.svg', root)), true, 'app icon is missing');
  assert.equal(existsSync(new URL('../render.yaml', root)), false, 'obsolete Render config is still active');
});
