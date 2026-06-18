import { afterEach, describe, expect, it } from 'vitest';
import { getAuthUrl, getSiteUrl } from './site-url';

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe('site-url', () => {
  it('uses NEXT_PUBLIC_APP_URL when present', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://planificaciondeoficinas.com/path';

    expect(getSiteUrl()).toBe('https://planificaciondeoficinas.com');
  });

  it('ignores empty URL variables and falls back to VERCEL_URL', () => {
    process.env.NEXT_PUBLIC_APP_URL = '';
    process.env.BETTER_AUTH_URL = '""';
    process.env.VERCEL_URL = 'planificacion-de-oficinas.vercel.app';

    expect(getSiteUrl()).toBe('https://planificacion-de-oficinas.vercel.app');
    expect(getAuthUrl()).toBe('https://planificacion-de-oficinas.vercel.app');
  });
});
