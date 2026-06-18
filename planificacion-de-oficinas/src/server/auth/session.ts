import type { Role } from '@/server/permissions';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import 'server-only';
import { auth } from './index';

/**
 * Helpers de sesión en servidor (máster 12.8 / 12.9).
 * La autorización se comprueba SIEMPRE en servidor.
 */

export async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
}

/**
 * Exige un usuario autenticado y activo. Redirige a /admin/login si no lo hay.
 */
export async function requireUser(): Promise<SessionUser> {
  const session = await getSession();
  if (!session?.user) {
    redirect('/admin/login');
  }
  const u = session.user as unknown as SessionUser;
  if (!u.isActive) {
    redirect('/admin/login?inactive=1');
  }
  return u;
}

/**
 * Exige un rol concreto (o uno de varios). Redirige si no cumple.
 */
export async function requireRole(...roles: Role[]): Promise<SessionUser> {
  const user = await requireUser();
  if (!roles.includes(user.role)) {
    redirect('/admin?denied=1');
  }
  return user;
}
