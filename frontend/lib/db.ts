import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL!;

// En serverless usamos el transaction pooler (puerto 6543)
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
