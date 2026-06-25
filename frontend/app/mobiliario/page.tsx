import Image from 'next/image';
import Link from 'next/link';
import {
  CATALOG_CTA_LABEL,
  catalogCategories,
  formatPrice,
  getCatalogProducts,
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export default async function CatalogIndexPage() {
  const products = await getCatalogProducts();
  const featured = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-ofi-offwhite text-ofi-black">
      <section className="bg-ofi-black px-8 py-8 text-ofi-white md:px-14">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 hover:text-ofi-pink">
            ← Ofiponiente
          </Link>
          <Link href="/planifica-tu-espacio/" className="rounded-full bg-ofi-pink px-5 py-2.5 text-sm font-semibold text-white">
            Planifica tu espacio
          </Link>
        </nav>

        <div className="max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-ofi-pink">Catálogo comercial</p>
          <h1 className="font-clash text-5xl font-bold leading-none md:text-7xl">
            Mobiliario nuevo y reacondicionado para oficina.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
            Explora una primera selección de productos con precios orientativos y stock inicial. El flujo está pensado para añadir referencias a presupuesto, no para cerrar una compra automática.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 border-b border-ofi-black/10 md:grid-cols-2 lg:grid-cols-4">
        {catalogCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/mobiliario/${category.slug}`}
            className="group border-r border-b border-ofi-black/10 p-8 transition-colors hover:bg-ofi-black"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-ofi-pink">{category.eyebrow}</p>
            <h2 className="font-clash text-2xl font-bold transition-colors group-hover:text-white">{category.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ofi-gray transition-colors group-hover:text-white/50">
              {category.description}
            </p>
            <span className="mt-7 inline-flex text-xs font-semibold text-ofi-pink">Ver productos →</span>
          </Link>
        ))}
      </section>

      <section className="px-8 py-12 md:px-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ofi-gray">Selección inicial</p>
            <h2 className="mt-2 font-clash text-3xl font-bold md:text-4xl">Productos destacados</h2>
          </div>
          <p className="max-w-sm text-sm text-ofi-gray">
            Precios orientativos sujetos a disponibilidad, configuración, transporte y montaje.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <article key={product.sku} className="overflow-hidden border border-ofi-black/10 bg-white">
              <div className="relative aspect-[4/3] bg-ofi-black/5">
                <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold">
                  {product.condition === 'reacondicionado' ? 'Reacondicionado' : 'Nuevo'}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-ofi-gray">{product.brand} · {product.categoryName}</p>
                <h3 className="mt-2 min-h-[3rem] font-clash text-xl font-bold">{product.name}</h3>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{formatPrice(product.priceCents)}</p>
                    <p className="text-xs text-ofi-gray">{product.stockQty} uds. disponibles</p>
                  </div>
                  <Link href={`/mobiliario/${product.categorySlug}`} className="border border-ofi-black px-4 py-2 text-sm font-semibold hover:bg-ofi-black hover:text-white">
                    {CATALOG_CTA_LABEL}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
