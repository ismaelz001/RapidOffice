import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import {
  CATALOG_CTA_LABEL,
  catalogCategories,
  formatPrice,
  getCatalogProducts,
  getCategory,
  getRefurbishedProducts,
  refurbishedFilterCategories,
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: {
    category: string;
  };
  searchParams?: {
    familia?: string;
  };
};

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ category: category.slug }));
}

export default async function CatalogCategoryPage({ params, searchParams }: PageProps) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const isRefurbishedView = category.slug === 'reacondicionado';
  const selectedFamily = isRefurbishedView && searchParams?.familia && refurbishedFilterCategories.some((item) => item.slug === searchParams.familia)
    ? searchParams.familia
    : undefined;
  const selectedFamilyLabel = selectedFamily
    ? refurbishedFilterCategories.find((item) => item.slug === selectedFamily)?.name
    : undefined;
  const products = isRefurbishedView
    ? await getRefurbishedProducts(selectedFamily)
    : await getCatalogProducts(category.slug);

  return (
    <main className="min-h-screen bg-ofi-offwhite text-ofi-black">
      <section className="border-b border-white/10 bg-ofi-black px-8 py-8 text-ofi-white md:px-14">
        <nav className="mb-12 flex items-center justify-between">
          <Link href="/mobiliario" className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65 hover:text-ofi-pink">
            ← Catálogo
          </Link>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65 hover:text-ofi-pink">
            Home
          </Link>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-ofi-pink">{category.eyebrow}</p>
            <h1 className="font-clash text-5xl font-bold leading-none md:text-7xl">{category.name}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              {category.description}
            </p>
          </div>
          <div className="border border-white/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ofi-pink">Cómo funciona</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Selecciona referencias para presupuesto. Confirmamos disponibilidad, transporte, montaje y alternativas antes de cerrar propuesta.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ofi-black/10 px-8 py-5 md:px-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ofi-gray">
            {products.length} productos {isRefurbishedView && selectedFamilyLabel ? `reacondicionados en ${selectedFamilyLabel.toLowerCase()}` : 'en esta categoría'}
          </p>
          <div className="flex flex-wrap gap-2">
            {catalogCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/mobiliario/${item.slug}`}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                  item.slug === category.slug
                    ? 'border-ofi-black bg-ofi-black text-white'
                    : 'border-ofi-black/15 text-ofi-gray hover:border-ofi-pink hover:text-ofi-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {isRefurbishedView ? (
        <section className="border-b border-ofi-black/10 bg-white px-8 py-6 md:px-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ofi-gray">
            Filtrar reacondicionado por familia
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/mobiliario/reacondicionado"
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                !selectedFamily
                  ? 'border-ofi-black bg-ofi-black text-white'
                  : 'border-ofi-black/15 text-ofi-gray hover:border-ofi-pink hover:text-ofi-pink'
              }`}
            >
              Todo reacondicionado
            </Link>
            {refurbishedFilterCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/mobiliario/reacondicionado?familia=${item.slug}`}
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                  selectedFamily === item.slug
                    ? 'border-ofi-black bg-ofi-black text-white'
                    : 'border-ofi-black/15 text-ofi-gray hover:border-ofi-pink hover:text-ofi-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.sku} className="group border-b border-r border-ofi-black/10 bg-white">
            <div className="relative aspect-[4/3] overflow-hidden bg-ofi-black/5">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
                  {product.condition === 'reacondicionado' ? 'Reacondicionado' : 'Nuevo'}
                </span>
                {product.compareAtPriceCents ? (
                  <span className="rounded-full bg-ofi-pink px-3 py-1 text-xs font-semibold text-white">
                    Oferta
                  </span>
                ) : null}
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-ofi-gray">{product.brand} · {product.sku}</p>
              <h2 className="mt-2 min-h-[3.5rem] font-clash text-2xl font-bold leading-tight">{product.name}</h2>
              <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-ofi-gray">{product.description}</p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  {product.compareAtPriceCents ? (
                    <p className="text-sm text-ofi-gray line-through">{formatPrice(product.compareAtPriceCents)}</p>
                  ) : null}
                  <p className="text-3xl font-bold">{formatPrice(product.priceCents)}</p>
                  <p className="mt-1 text-xs text-ofi-gray">{product.stockQty} uds. disponibles</p>
                </div>
                <a
                  href={`/mobiliario/${category.slug}#presupuesto`}
                  className="shrink-0 border border-ofi-black px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-ofi-black hover:text-white"
                >
                  {CATALOG_CTA_LABEL}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="presupuesto" className="grid grid-cols-1 border-t border-ofi-black/10 lg:grid-cols-2">
        <div className="bg-ofi-black px-8 py-14 text-white md:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ofi-pink">Presupuesto</p>
          <h2 className="mt-4 font-clash text-4xl font-bold">¿Quieres que preparemos una propuesta?</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
            Pásanos producto, unidades aproximadas y ubicación. Revisaremos stock real, montaje y alternativas equivalentes.
          </p>
        </div>
        <QuoteRequestForm
          source="category"
          context={`Categoría: ${category.name}${selectedFamilyLabel ? ` · Familia reacondicionado: ${selectedFamilyLabel}` : ''}`}
          defaultMessage={`Me interesa ${category.name.toLowerCase()}...`}
          submitLabel="Solicitar disponibilidad"
          formClassName="flex flex-col gap-4 bg-ofi-offwhite px-8 py-14 md:px-14"
          buttonClassName="bg-ofi-black px-5 py-3.5 text-left text-sm font-semibold text-white hover:bg-ofi-pink-dark disabled:opacity-60"
        />
      </section>
    </main>
  );
}
