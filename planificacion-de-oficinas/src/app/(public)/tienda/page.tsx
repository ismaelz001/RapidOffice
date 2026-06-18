import Link from 'next/link';

const productos = [
  {
    title: 'Sillas de trabajo',
    price: 'Desde 290 €',
    description: 'Ergonomía, acabado premium y confort para jornadas largas.',
    badge: 'Más demandadas',
  },
  {
    title: 'Mesas modulares',
    price: 'Desde 640 €',
    description: 'Diseño flexible para equipos híbridos y espacios de colaboración.',
    badge: 'Nueva colección',
  },
  {
    title: 'Soluciones de almacenaje',
    price: 'Desde 180 €',
    description: 'Mobiliario pensado para ordenar, mostrar y optimizar el espacio.',
    badge: 'Prácticas',
  },
];

const beneficios = [
  'Propuestas guiadas por uso real y ocupación del espacio.',
  'Catálogo curado con criterios técnicos y visuales.',
  'Acompañamiento de compra y puesta en marcha.',
];

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f4efe8]">
      <header className="border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
            Ofiponiente
          </Link>
          <Link href="/" className="text-sm font-semibold text-white/70 transition hover:text-[#f7c5e3]">
            Volver al inicio
          </Link>
        </div>
      </header>

      <section className="px-6 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ea43a5]">
              Tienda inicial
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-6xl">
              Soluciones de oficina seleccionadas para proyectos reales.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Esta primera etapa del catálogo sirve como base para un ecommerce más completo, con productos, consultas y propuestas conectadas al proceso de planificación.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#productos"
                className="inline-flex items-center justify-center rounded-full bg-[#ea43a5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c92e88]"
              >
                Ver productos
              </a>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ea43a5] hover:text-[#ea43a5]"
              >
                Pedir asesoramiento
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111116] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f7c5e3]">
              Qué aporta esta tienda
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/70">
              {beneficios.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="productos" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea43a5]">
                Catálogo inicial
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Productos destacados para empezar a construir la experiencia comercial.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productos.map((producto) => (
              <article key={producto.title} className="rounded-[1.6rem] border border-white/10 bg-[#111116] p-6">
                <div className="inline-flex rounded-full border border-[#ea43a5]/30 bg-[#ea43a5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7c5e3]">
                  {producto.badge}
                </div>
                <div className="mt-5 h-28 rounded-[1rem] bg-gradient-to-br from-[#ea43a5]/25 via-[#111116] to-[#f7c5e3]/20" />
                <h3 className="mt-5 text-xl font-semibold text-white">{producto.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{producto.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{producto.price}</span>
                  <button className="text-sm font-semibold text-[#f7c5e3] transition hover:text-white">
                    Ver detalles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f4efe8] px-8 py-10 text-[#0b0b0d] sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c92e88]">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Si quieres llevar esta propuesta más lejos, podemos convertirla en una experiencia de compra real.
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center rounded-full bg-[#0b0b0d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ea43a5]"
            >
              Acceder al panel
            </Link>
            <a
              href="mailto:hola@ofiponiente.com"
              className="inline-flex items-center justify-center rounded-full border border-[#0b0b0d]/10 px-6 py-3 text-sm font-semibold text-[#0b0b0d] transition hover:border-[#ea43a5] hover:text-[#ea43a5]"
            >
              Escríbenos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
