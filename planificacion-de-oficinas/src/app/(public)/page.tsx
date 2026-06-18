import Link from 'next/link';

const stats = [
  { value: '25+', label: 'proyectos guiados' },
  { value: '7 días', label: 'para propuesta inicial' },
  { value: '100%', label: 'enfoque en ocupación real' },
  { value: '4.9/5', label: 'valoración de clientes' },
];

const servicios = [
  {
    title: 'Planificación de espacios',
    text: 'Diagnóstico, zonificación y distribución para que cada m² funcione mejor y sea más cómodo.',
  },
  {
    title: 'Catálogo y soluciones',
    text: 'Selección técnica y visual de mobiliario, equipamiento y acabados alineados con el uso real.',
  },
  {
    title: 'Acompañamiento de montaje',
    text: 'Coordinación de proveedores, entregas y puesta en marcha sin sobresaltos ni improvisaciones.',
  },
];

const productos = [
  {
    title: 'Sillas ergonómicas',
    blurb: 'Diseño cómodo, duradero y preparado para uso diario.',
    cta: 'Ver propuesta',
  },
  {
    title: 'Mesas de trabajo',
    blurb: 'Soluciones flexibles para equipos y espacios compartidos.',
    cta: 'Solicitar muestra',
  },
  {
    title: 'Almacenaje y orden',
    blurb: 'Mobiliario pensado para más claridad, más orden y mejor rendimiento.',
    cta: 'Consultar catálogo',
  },
];

const pasos = [
  {
    title: '1. Descubrimiento',
    text: 'Reunión inicial para entender equipo, procesos, crecimiento y necesidades operativas.',
  },
  {
    title: '2. Propuesta',
    text: 'Diseñamos una propuesta concreta con opciones, prioridades y presupuesto orientativo.',
  },
  {
    title: '3. Ejecución',
    text: 'Seguimiento de compras, montaje y ajustes finales para dejar la oficina lista para trabajar.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f4efe8]">
      <header className="border-b border-white/10 bg-[#0b0b0d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
            Ofiponiente
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/65 sm:flex">
            <a href="#servicios" className="transition hover:text-[#f7c5e3]">
              Servicios
            </a>
            <a href="#catalogo" className="transition hover:text-[#f7c5e3]">
              Catálogo
            </a>
            <a href="#contacto" className="transition hover:text-[#f7c5e3]">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ea43a5]">
              Planificación de oficinas by Ofiponiente
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-7xl">
              Espacios de trabajo con criterio, presencia y resultado real.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Diseñamos oficinas que acompañan el día a día del equipo: más funcionales, más cómodas y mucho más fáciles de entender y ejecutar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-[#ea43a5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c92e88]"
              >
                Solicitar propuesta
              </Link>
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ea43a5] hover:text-[#ea43a5]"
              >
                Ver catálogo inicial
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111116] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f7c5e3]">
              Qué incluye el proceso
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                Análisis del espacio, el uso del equipo y las prioridades de funcionamiento.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                Propuesta visual y técnica con criterios de ergonomía y eficiencia.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                Coordinación de mobiliario, equipamiento y puesta en marcha.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea43a5]">
              Servicios
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Un servicio integral para que cada oficina sea más útil y más cómoda.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicios.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#111116] p-7">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#111116] p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea43a5]">
                Catálogo inicial
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Un ecommerce selectivo, pensado como extensión natural de la propuesta comercial.
              </h2>
            </div>
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ea43a5] hover:text-[#ea43a5]"
            >
              Explorar tienda
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productos.map((producto) => (
              <div key={producto.title} className="rounded-[1.5rem] border border-white/10 bg-[#18181d] p-6">
                <div className="h-28 rounded-[1rem] bg-gradient-to-br from-[#ea43a5]/30 via-[#111116] to-[#f7c5e3]/20" />
                <h3 className="mt-5 text-xl font-semibold text-white">{producto.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{producto.blurb}</p>
                <button className="mt-5 text-sm font-semibold text-[#f7c5e3] transition hover:text-white">
                  {producto.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#111116] p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea43a5]">
              Proceso
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Un camino claro, ordenado y orientado a la decisión.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pasos.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{step.text}</p>
              </div>
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
              Hablemos de cómo mejorar tu oficina sin perder tiempo ni presupuesto.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#0b0b0d]/75">
              Si estás planificando un cambio, una ampliación o una nueva distribución, podemos ayudar a convertir la idea en una propuesta concreta y accionable.
            </p>
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

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Ofiponiente · Planificación de oficinas</p>
          <p>Diseño, consultoría y acompañamiento para espacios de trabajo.</p>
        </div>
      </footer>
    </main>
  );
}
