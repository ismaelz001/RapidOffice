import { z } from 'zod';
import { getAuthUrl, getSiteUrl } from './site-url';

/**
 * Validación de variables de entorno con Zod.
 * Regla del máster (12.10 / 12.18): las variables de entorno se validan;
 * los secretos viven solo en servidor. Si falta una variable crítica,
 * la app falla de forma explícita en el arranque.
 */
const envSchema = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),

  // Supabase — URL pooled (puerto 6543) para queries serverless
  DATABASE_URL: z
    .string()
    .url('DATABASE_URL debe ser una URL postgresql:// válida')
    .refine((v) => v.startsWith('postgres'), 'DATABASE_URL debe apuntar a PostgreSQL'),

  // Supabase — URL directa (puerto 5432) solo para drizzle-kit (opcional en runtime)
  DATABASE_URL_DIRECT: z.string().url().optional(),

  BETTER_AUTH_SECRET: z
    .string()
    .min(16, 'BETTER_AUTH_SECRET debe tener al menos 16 caracteres'),
  BETTER_AUTH_URL: z.string().url().default('http://localhost:3000'),

  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),

  // Opcionales en Fase 1 (se exigirán en su fase)
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
  STORAGE_BUCKET: z.string().optional(),
  STORAGE_REGION: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

/**
 * Carga y valida el entorno una sola vez (cacheado).
 * Usar en server-only y en herramientas (drizzle.config.ts).
 */
export function loadEnv(): Env {
  if (cached) return cached;

  const parsed = envSchema.safeParse({
    ...process.env,
    BETTER_AUTH_URL: getAuthUrl(),
    NEXT_PUBLIC_APP_URL: getSiteUrl(),
  });
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  - ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(
      `\n[CONFIG] Variables de entorno inválidas o ausentes:\n${issues}\n\n` +
        `Revisa tu archivo .env.local (usa .env.example como plantilla).\n`,
    );
  }

  cached = parsed.data;
  return cached;
}
