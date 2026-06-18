'use client';

import { useEffect } from 'react';

/**
 * Página de error de segmento (máster 12.19).
 * Muestra un mensaje recuperable y un identificador de error;
 * no se usa alert() ni se exponen detalles sensibles.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // El detalle real se registra en el servidor; aquí solo referencia.
    console.error('[error.tsx]', error.digest ?? error.message);
  }, [error]);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-ofi-black px-6 text-ofi-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold">Algo no ha ido bien</h1>
        <p className="mt-4 text-ofi-offwhite/70">
          Ha ocurrido un error. Puedes reintentar la operación.
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-xs text-ofi-offwhite/40">Ref: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="mt-8 rounded-full bg-ofi-pink px-6 py-3 font-medium text-ofi-white transition-colors hover:bg-ofi-pink-dark"
        >
          Reintentar
        </button>
      </div>
    </main>
  );
}
