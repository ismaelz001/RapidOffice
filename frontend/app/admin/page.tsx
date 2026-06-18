'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

interface AdminSession {
  username: string;
  role: string;
  signedAt: string;
}

const SUMMARY = [
  { label: 'Leads activos', value: '24', accent: true },
  { label: 'Solicitudes', value: '11' },
  { label: 'Visitas previstas', value: '6' },
  { label: 'Presupuestos', value: '9' },
];

const RECENT_ITEMS = [
  { title: 'Nuevo lead · Torre de oficinas', meta: 'Planificación · 2h', state: 'Nuevo' },
  { title: 'Solicitud revisada · Grupo Solis', meta: 'Comercial · Hoy', state: 'En revisión' },
  { title: 'Visita confirmada · Arandina', meta: 'Operaciones · Mañana', state: 'Confirmada' },
];

export default function AdminPage() {
  const router = useRouter();
  const [session, setSession] = useState<AdminSession | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('ofi-admin-auth');
    if (!raw) {
      router.replace('/login');
      return;
    }

    try {
      setSession(JSON.parse(raw));
    } catch {
      localStorage.removeItem('ofi-admin-auth');
      router.replace('/login');
    }
  }, [router]);

  const greeting = useMemo(() => {
    if (!session) return 'Cargando…';
    return `Hola ${session.username}, tu panel está listo para trabajar.`;
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-ofi-offwhite text-ofi-black">
      <header className="border-b border-ofi-border/10 bg-ofi-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Ofiponiente</p>
            <h1 className="font-clash text-2xl font-semibold">Panel operativo</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-ofi-border/10 bg-ofi-offwhite px-3 py-1 text-sm text-ofi-gray">
              {session.role}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem('ofi-admin-auth');
                router.push('/login');
              }}
              className="rounded-full border border-ofi-border/10 px-3 py-1 text-sm text-ofi-black transition hover:border-ofi-pink hover:text-ofi-pink"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-ofi-border/10 bg-ofi-black p-7 text-ofi-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Dashboard</p>
              <h2 className="mt-3 font-clash text-3xl font-semibold leading-tight sm:text-4xl">
                {greeting}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                Centraliza oportunidades, tareas y solicitudes para responder con la misma calidad premium que el cliente percibe en la web.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              <p className="font-semibold text-ofi-pink-light">Última conexión</p>
              <p className="mt-1">{new Date(session.signedAt).toLocaleString('es-ES')}</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SUMMARY.map(item => (
            <article key={item.label} className="rounded-[24px] border border-ofi-border/10 bg-ofi-white p-5 shadow-sm">
              <p className="text-sm text-ofi-gray">{item.label}</p>
              <p className={`mt-3 font-clash text-3xl font-semibold ${item.accent ? 'text-ofi-pink' : 'text-ofi-black'}`}>
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[28px] border border-ofi-border/10 bg-ofi-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Actividad reciente</p>
                <h3 className="mt-2 font-clash text-2xl font-semibold">Leads y follow-up</h3>
              </div>
              <Link href="/" className="text-sm font-semibold text-ofi-pink transition hover:text-ofi-pink-dark">
                Ver web
              </Link>
            </div>
            <div className="mt-6 space-y-3">
              {RECENT_ITEMS.map(item => (
                <div key={item.title} className="flex items-center justify-between rounded-[20px] border border-ofi-border/10 bg-ofi-offwhite px-4 py-3">
                  <div>
                    <p className="font-medium text-ofi-black">{item.title}</p>
                    <p className="mt-1 text-sm text-ofi-gray">{item.meta}</p>
                  </div>
                  <span className="rounded-full bg-ofi-pink-light px-3 py-1 text-sm text-ofi-pink-dark">{item.state}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-ofi-border/10 bg-ofi-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Acciones rápidas</p>
            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-between rounded-[20px] border border-ofi-border/10 bg-ofi-offwhite px-4 py-3 text-left text-sm font-medium text-ofi-black transition hover:border-ofi-pink">
                <span>Nueva solicitud de planificación</span>
                <span className="text-ofi-pink">→</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-[20px] border border-ofi-border/10 bg-ofi-offwhite px-4 py-3 text-left text-sm font-medium text-ofi-black transition hover:border-ofi-pink">
                <span>Programar visita comercial</span>
                <span className="text-ofi-pink">→</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-[20px] border border-ofi-border/10 bg-ofi-offwhite px-4 py-3 text-left text-sm font-medium text-ofi-black transition hover:border-ofi-pink">
                <span>Revisar presupuesto</span>
                <span className="text-ofi-pink">→</span>
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
