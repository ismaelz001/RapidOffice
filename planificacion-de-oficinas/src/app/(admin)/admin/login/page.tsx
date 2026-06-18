'use client';

import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Login privado del panel (máster 12.8).
 * Sin registro público. Manejo de errores en interfaz (no alert()).
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await signIn.email({ email, password });

    setLoading(false);
    if (signInError) {
      setError('Credenciales incorrectas o cuenta no autorizada.');
      return;
    }
    router.push('/admin');
    router.refresh();
  }

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-ofi-black px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-ofi-border bg-black/40 p-8"
      >
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-ofi-pink">
          Panel privado
        </p>
        <h1 className="mb-6 font-display text-2xl font-bold text-ofi-white">Iniciar sesión</h1>

        <label className="mb-4 block">
          <span className="mb-1 block text-sm text-ofi-offwhite/70">Email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-ofi-border bg-black px-3 py-2 text-ofi-white outline-none focus:border-ofi-pink"
          />
        </label>

        <label className="mb-6 block">
          <span className="mb-1 block text-sm text-ofi-offwhite/70">Contraseña</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-ofi-border bg-black px-3 py-2 text-ofi-white outline-none focus:border-ofi-pink"
          />
        </label>

        {error && (
          <p
            role="alert"
            className="mb-4 rounded-lg border border-red-900 bg-red-950/40 px-3 py-2 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-ofi-pink px-6 py-3 font-medium text-ofi-white transition-colors hover:bg-ofi-pink-dark disabled:opacity-50"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}
