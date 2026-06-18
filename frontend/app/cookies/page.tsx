import Link from 'next/link';

export const metadata = {
  title: 'Cookies y privacidad | Ofiponiente',
  description: 'Politica de cookies y privacidad de Ofiponiente.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 hover:underline">
          Volver a Ofiponiente
        </Link>

        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">Cookies y privacidad</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Politica de cookies, datos y consentimiento
          </h1>
          <p className="max-w-3xl text-base text-gray-700">
            Ofiponiente utiliza cookies tecnicas basicas para el funcionamiento del sitio y para recordar tu preferencia de consentimiento.
            No usamos cookies de terceros para publicidad en esta fase.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Que usamos</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Cookies tecnicas y de preferencia para funcionalidades basicas.</li>
            <li>Almacenamiento local para recordar tu decision de consentimiento.</li>
            <li>Sin cookies publicitarias ni rastreo de terceros por defecto.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Tu eleccion</h2>
          <p className="mt-4 text-gray-700">
            Puedes aceptar o rechazar el uso de cookies desde el banner inferior. Si cambias de opinion,
            puedes borrar la preferencia desde el almacenamiento local del navegador.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Contacto</h2>
          <p className="mt-4 text-gray-700">
            Para cualquier consulta sobre privacidad y cookies, usa el canal de contacto disponible en la web.
          </p>
        </section>
      </div>
    </main>
  );
}
