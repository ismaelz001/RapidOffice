import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-ofi-black px-6 text-ofi-white">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl font-bold text-ofi-pink">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Página no encontrada</h1>
        <p className="mt-4 text-ofi-offwhite/70">
          La página que buscas no existe o se ha movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-ofi-border px-6 py-3 font-medium text-ofi-white transition-colors hover:border-ofi-pink"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
