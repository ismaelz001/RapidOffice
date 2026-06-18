import { auth } from '@/server/auth';
import { toNextJsHandler } from 'better-auth/next-js';

/**
 * Route handler de Better Auth (login, logout, sesión, etc.).
 * Estas rutas NO se indexan (máster 13.12).
 */
export const { GET, POST } = toNextJsHandler(auth);
