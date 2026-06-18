'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ADMIN_USERS = [
  { username: 'josema', password: 'admin1', role: 'Administrador' },
  { username: 'ismael', password: 'admin1', role: 'Administrador' },
];

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 250));

    const match = ADMIN_USERS.find(
      entry => entry.username === username.trim().toLowerCase() && entry.password === password
    );

    if (match) {
      localStorage.setItem(
        'ofi-admin-auth',
        JSON.stringify({ username: match.username, role: match.role, signedAt: new Date().toISOString() })
      );
      router.push('/admin');
      return;
    }

    setError('Credenciales inválidas. Prueba josema/admin1 o ismael/admin1.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-ofi-offwhite px-4 py-10 text-ofi-black sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
        <div className="flex-1 rounded-[32px] border border-ofi-border/20 bg-ofi-black p-8 text-ofi-white shadow-[0_20px_80px_rgba(0,0,0,0.16)] sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Ofiponiente</p>
          <h1 className="mt-4 font-clash text-3xl font-semibold leading-tight sm:text-4xl">
            Acceso gestor operativo
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Gestiona leads, solicitudes de planificación y seguimiento comercial desde un panel alineado con la identidad visual de la web.
          </p>
          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ofi-pink-light">Estado</p>
            <p className="mt-3 text-lg font-medium text-white">Conexión lista para operar en tiempo real.</p>
          </div>
        </div>

        <div className="flex-1 rounded-[32px] border border-ofi-border/10 bg-ofi-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ofi-pink">Panel</p>
          <h2 className="mt-3 font-clash text-3xl font-semibold text-ofi-black">Inicia sesión</h2>
          <p className="mt-3 text-sm leading-7 text-ofi-gray">
            Acceso de prueba para el equipo: usa josema o ismael con la contraseña admin1.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            {error ? (
              <div className="rounded-2xl border border-ofi-pink/20 bg-ofi-pink-light/70 p-3 text-sm text-ofi-black">
                {error}
              </div>
            ) : null}

            <div>
              <label className="mb-2 block text-sm font-medium text-ofi-gray">Usuario</label>
              <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full rounded-2xl border border-ofi-border/10 bg-ofi-offwhite px-4 py-3 text-sm outline-none ring-0 transition focus:border-ofi-pink"
                placeholder="josema"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ofi-gray">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-ofi-border/10 bg-ofi-offwhite px-4 py-3 text-sm outline-none transition focus:border-ofi-pink"
                placeholder="admin1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-ofi-pink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ofi-pink-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Accediendo…' : 'Entrar al panel'}
            </button>
          </form>

          <div className="mt-6 rounded-[24px] border border-ofi-border/10 bg-ofi-offwhite p-4 text-sm text-ofi-gray">
            <p className="font-semibold text-ofi-black">Credenciales de prueba</p>
            <div className="mt-2 space-y-1">
              <p>josema · admin1</p>
              <p>ismael · admin1</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-ofi-gray">
            <Link href="/" className="font-semibold text-ofi-pink transition hover:text-ofi-pink-dark">
              Volver a la web
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
