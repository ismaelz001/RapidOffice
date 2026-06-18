import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// drizzle-kit necesita la conexión DIRECTA (puerto 5432), no la pooled.
// DATABASE_URL_DIRECT = URL directa de Supabase (Settings → Database → Direct connection)
// Si no se define, usa DATABASE_URL como fallback (válido en desarrollo local).
dotenv.config({ path: '.env.local' });

const url = process.env.DATABASE_URL_DIRECT ?? process.env.DATABASE_URL;
if (!url) throw new Error('Configura DATABASE_URL_DIRECT o DATABASE_URL en .env.local');

export default defineConfig({
  schema: './src/server/db/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: { url },
  verbose: true,
  strict: true,
});
