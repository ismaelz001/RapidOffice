import { SignOutButton } from '@/components/admin/SignOutButton';
import { requireUser } from '@/server/auth/session';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panel',
  robots: { index: false, follow: false },
};

/**
 * Dashboard privado (máster 15.5 — puerta de salida Fase 1: "login correcto").
 * Server Component: la sesión y el rol se comprueban en servidor.
 */
export default async function AdminDashboardPage() {
  const user = await requireUser();

  return (
    <main className="min-h-[100dvh] bg-ofi-black px-6 py-12 text-ofi-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ofi-pink">
              Panel privado
            </p>
            <h1 className="mt-1 font-display text-3xl font-bold">Hola, {user.name}</h1>
          </div>
          <SignOutButton />
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-ofi-border p-5">
            <dt className="text-sm text-ofi-offwhite/60">Rol</dt>
            <dd className="mt-1 font-display text-xl font-bold capitalize">{user.role}</dd>
          </div>
          <div className="rounded-xl border border-ofi-border p-5">
            <dt className="text-sm text-ofi-offwhite/60">Estado</dt>
            <dd className="mt-1 font-display text-xl font-bold">
              {user.isActive ? 'Activo' : 'Inactivo'}
            </dd>
          </div>
          <div className="rounded-xl border border-ofi-border p-5">
            <dt className="text-sm text-ofi-offwhite/60">Entorno</dt>
            <dd className="mt-1 font-display text-xl font-bold">
              {process.env.APP_ENV ?? 'development'}
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-ofi-offwhite/50">
          Base técnica operativa. Los módulos de CRM, catálogo y proyectos se construirán en las
          siguientes entregas.
        </p>
      </div>
    </main>
  );
}
