import { loadEnv } from '@/lib/env';
import { db } from '@/server/db';
import { account, session, user, verification } from '@/server/db/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import 'server-only';

const env = loadEnv();

/**
 * Better Auth (máster 12.8).
 * - Email + contraseña, acceso privado (sin registro público para /admin).
 * - Sesiones de servidor revocables, cookies seguras (httpOnly/secure/sameSite).
 * - NO se guardan tokens de sesión en localStorage.
 */
export const auth = betterAuth({
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
    // Sin auto-registro público: los usuarios se crean por invitación.
    disableSignUp: true,
    minPasswordLength: 10,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 días
    updateAge: 60 * 60 * 24, // refresco diario
  },
  advanced: {
    cookiePrefix: 'pdo',
    useSecureCookies: env.APP_ENV !== 'development',
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'lectura',
        input: false, // no se establece desde el cliente
      },
      isActive: {
        type: 'boolean',
        defaultValue: true,
        input: false,
      },
    },
  },
});

export type Auth = typeof auth;
