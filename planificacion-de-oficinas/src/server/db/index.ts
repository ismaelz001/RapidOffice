import { loadEnv } from '@/lib/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'server-only';
import * as schema from './schema';

/**
 * Cliente de base de datos — Supabase (PostgreSQL) + Drizzle ORM.
 * Supabase en Frankfurt (eu-central-1): datos en Europa, cumplimiento RGPD.
 *
 * Dos URLs en Supabase (Settings → Database → Connection string):
 *   - DIRECTA  puerto 5432 → para migraciones con drizzle-kit.
 *   - POOLED   puerto 6543 → para queries en serverless/Vercel.
 *
 * En producción: DATABASE_URL = pooled (6543), DATABASE_URL_DIRECT = directa (5432).
 * En desarrollo: ambas pueden ser la URL directa.
 *
 * `server-only` garantiza que nunca se importe desde el cliente.
 */
const env = loadEnv();

// max: 1 — óptimo para entornos serverless (Vercel)
const client = postgres(env.DATABASE_URL, { max: 1, ssl: 'require' });

export const db = drizzle(client, { schema });
export { schema };
export type Database = typeof db;
