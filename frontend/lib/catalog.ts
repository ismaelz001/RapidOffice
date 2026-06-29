import postgres from 'postgres';

export type ProductCondition = 'nuevo' | 'reacondicionado';

export type CatalogCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
};

export type CatalogProduct = {
  sku: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  condition: ProductCondition;
  priceCents: number;
  compareAtPriceCents?: number;
  stockQty: number;
  brand: string;
  imageUrl: string;
  description: string;
};

export const CATALOG_CTA_LABEL = 'Añadir a presupuesto';

export const catalogCategories: CatalogCategory[] = [
  {
    slug: 'sillas',
    name: 'Sillas',
    eyebrow: 'Ergonomía y dirección',
    description: 'Sillas operativas, dirección, confidente y modelos reacondicionados listos para equipar puestos de trabajo.',
  },
  {
    slug: 'mesas-escritorios',
    name: 'Mesas y escritorios',
    eyebrow: 'Puestos, dirección y sistemas',
    description: 'Mesas individuales, bench multipuesto, escritorios de dirección y soluciones regulables para oficina.',
  },
  {
    slug: 'salas-colectividades',
    name: 'Salas y colectividades',
    eyebrow: 'Reunión, formación y espera',
    description: 'Mobiliario para salas de reunión, aulas de formación, recepción, espera y zonas comunes.',
  },
  {
    slug: 'almacenaje-archivo',
    name: 'Almacenaje y archivo',
    eyebrow: 'Orden operativo',
    description: 'Armarios, cajoneras, archivadores, estanterías y taquillas para mantener la oficina organizada.',
  },
  {
    slug: 'divisiones',
    name: 'Divisiones',
    eyebrow: 'Mamparas y separadores',
    description: 'Mamparas, paneles acústicos y separadores para ordenar espacios sin obra pesada.',
  },
  {
    slug: 'complementos',
    name: 'Complementos',
    eyebrow: 'Iluminación y accesorios',
    description: 'Iluminación, soportes, accesorios técnicos y piezas auxiliares para completar el equipamiento.',
  },
  {
    slug: 'reacondicionado',
    name: 'Reacondicionado',
    eyebrow: 'Stock con ahorro inmediato',
    description: 'Selección de mobiliario reacondicionado con precio competitivo, disponibilidad limitada y control de estado.',
  },
];

export const refurbishedFilterCategories = catalogCategories.filter(
  (category) => category.slug !== 'reacondicionado',
);

export const catalogProducts: CatalogProduct[] = [
  {
    sku: 'RO-SIL-001',
    slug: 'silla-operativa-malla-zas',
    name: 'Silla operativa respaldo malla Zas',
    categorySlug: 'sillas',
    categoryName: 'Sillas',
    condition: 'nuevo',
    priceCents: 14760,
    compareAtPriceCents: 16400,
    stockQty: 12,
    brand: 'Dynamobel',
    imageUrl: '/imgs/chair.jpg',
    description: 'Silla ergonómica de trabajo diario con respaldo transpirable, brazos regulables y base con ruedas.',
  },
  {
    sku: 'RO-SIL-002',
    slug: 'silla-direccion-please-2-reacondicionada',
    name: 'Silla dirección Please 2 reacondicionada',
    categorySlug: 'sillas',
    categoryName: 'Sillas',
    condition: 'reacondicionado',
    priceCents: 39500,
    stockQty: 4,
    brand: 'Steelcase',
    imageUrl: '/imgs/executive-office.jpg',
    description: 'Modelo de dirección reacondicionado, revisado y preparado para despacho o puesto intensivo.',
  },
  {
    sku: 'RO-SIL-003',
    slug: 'silla-confidente-sala-espera',
    name: 'Silla confidente para visita',
    categorySlug: 'sillas',
    categoryName: 'Sillas',
    condition: 'nuevo',
    priceCents: 8900,
    stockQty: 20,
    brand: 'Forma 5',
    imageUrl: '/imgs/meeting-room.jpg',
    description: 'Silla fija para visitas, salas de reunión y zonas de espera con estructura resistente.',
  },
  {
    sku: 'RO-MES-001',
    slug: 'mesa-operativa-160-blanca',
    name: 'Mesa operativa 160 cm blanca',
    categorySlug: 'mesas-escritorios',
    categoryName: 'Mesas y escritorios',
    condition: 'nuevo',
    priceCents: 22900,
    stockQty: 15,
    brand: 'Actiu',
    imageUrl: '/imgs/despacho.png',
    description: 'Mesa recta para puesto individual con estructura metálica y tablero técnico de alta resistencia.',
  },
  {
    sku: 'RO-MES-002',
    slug: 'bench-multipuesto-4-personas',
    name: 'Sistema bench multipuesto 4 personas',
    categorySlug: 'mesas-escritorios',
    categoryName: 'Mesas y escritorios',
    condition: 'nuevo',
    priceCents: 118000,
    stockQty: 5,
    brand: 'JG Group',
    imageUrl: '/imgs/office-hero.jpg',
    description: 'Sistema de trabajo compartido para cuatro puestos con canalización central y separadores opcionales.',
  },
  {
    sku: 'RO-MES-003',
    slug: 'mesa-direccion-reacondicionada-nogal',
    name: 'Mesa de dirección reacondicionada nogal',
    categorySlug: 'mesas-escritorios',
    categoryName: 'Mesas y escritorios',
    condition: 'reacondicionado',
    priceCents: 42000,
    compareAtPriceCents: 68000,
    stockQty: 2,
    brand: 'Haworth',
    imageUrl: '/imgs/executive-office.jpg',
    description: 'Mesa premium reacondicionada para despacho de dirección, revisada y lista para instalación.',
  },
  {
    sku: 'RO-SAL-001',
    slug: 'mesa-reunion-ovalada-8-personas',
    name: 'Mesa de reunión ovalada 8 personas',
    categorySlug: 'salas-colectividades',
    categoryName: 'Salas y colectividades',
    condition: 'nuevo',
    priceCents: 69000,
    stockQty: 3,
    brand: 'Forma 5',
    imageUrl: '/imgs/meeting-room.jpg',
    description: 'Mesa para salas de reunión medianas con tablero amplio y estructura preparada para conectividad.',
  },
  {
    sku: 'RO-SAL-002',
    slug: 'pack-aula-formacion-12-puestos',
    name: 'Pack aula formación 12 puestos',
    categorySlug: 'salas-colectividades',
    categoryName: 'Salas y colectividades',
    condition: 'nuevo',
    priceCents: 154000,
    stockQty: 4,
    brand: 'Mepel',
    imageUrl: '/imgs/office-hero.jpg',
    description: 'Conjunto de mesas y sillas para formación, academias y salas polivalentes.',
  },
  {
    sku: 'RO-SAL-003',
    slug: 'bancada-sala-espera-3-plazas',
    name: 'Bancada sala de espera 3 plazas',
    categorySlug: 'salas-colectividades',
    categoryName: 'Salas y colectividades',
    condition: 'reacondicionado',
    priceCents: 18500,
    stockQty: 6,
    brand: 'AIC',
    imageUrl: '/imgs/chair.jpg',
    description: 'Bancada reacondicionada para recepción, sala de espera o zonas comunes.',
  },
  {
    sku: 'RO-ALM-001',
    slug: 'armario-metalico-puertas-correderas',
    name: 'Armario metálico puertas correderas',
    categorySlug: 'almacenaje-archivo',
    categoryName: 'Almacenaje y archivo',
    condition: 'nuevo',
    priceCents: 31500,
    stockQty: 8,
    brand: 'JMM',
    imageUrl: '/imgs/archive.jpg',
    description: 'Armario de archivo para documentación, carpetas y material operativo de oficina.',
  },
  {
    sku: 'RO-ALM-002',
    slug: 'cajonera-rodante-3-cajones',
    name: 'Cajonera rodante 3 cajones',
    categorySlug: 'almacenaje-archivo',
    categoryName: 'Almacenaje y archivo',
    condition: 'nuevo',
    priceCents: 11900,
    stockQty: 18,
    brand: 'Actiu',
    imageUrl: '/imgs/archive.jpg',
    description: 'Cajonera móvil para puesto individual, con cerradura y ruedas.',
  },
  {
    sku: 'RO-ALM-003',
    slug: 'archivador-reacondicionado-4-cajones',
    name: 'Archivador reacondicionado 4 cajones',
    categorySlug: 'almacenaje-archivo',
    categoryName: 'Almacenaje y archivo',
    condition: 'reacondicionado',
    priceCents: 16500,
    stockQty: 7,
    brand: 'Sedus',
    imageUrl: '/imgs/archive.jpg',
    description: 'Archivador revisado para expedientes, documentación o back office.',
  },
  {
    sku: 'RO-DIV-001',
    slug: 'mampara-cristal-modular',
    name: 'Mampara modular de cristal',
    categorySlug: 'divisiones',
    categoryName: 'Divisiones',
    condition: 'nuevo',
    priceCents: 98000,
    stockQty: 6,
    brand: 'Ofiponiente',
    imageUrl: '/imgs/divisions.jpg',
    description: 'Sistema modular para separar despachos y salas manteniendo entrada de luz natural.',
  },
  {
    sku: 'RO-DIV-002',
    slug: 'panel-acustico-sobremesa',
    name: 'Panel acústico sobremesa',
    categorySlug: 'divisiones',
    categoryName: 'Divisiones',
    condition: 'nuevo',
    priceCents: 7600,
    stockQty: 30,
    brand: 'Sedus',
    imageUrl: '/imgs/divisions.jpg',
    description: 'Separador acústico para bench y puestos compartidos.',
  },
  {
    sku: 'RO-DIV-003',
    slug: 'biombo-movil-tapizado',
    name: 'Biombo móvil tapizado',
    categorySlug: 'divisiones',
    categoryName: 'Divisiones',
    condition: 'reacondicionado',
    priceCents: 13200,
    stockQty: 5,
    brand: 'Forma 5',
    imageUrl: '/imgs/divisions.jpg',
    description: 'Separador móvil reacondicionado para dividir zonas de trabajo o espera.',
  },
  {
    sku: 'RO-COM-001',
    slug: 'lampara-led-puesto-trabajo',
    name: 'Lámpara LED para puesto de trabajo',
    categorySlug: 'complementos',
    categoryName: 'Complementos',
    condition: 'nuevo',
    priceCents: 5900,
    stockQty: 25,
    brand: 'Ofiponiente',
    imageUrl: '/imgs/despacho.png',
    description: 'Iluminación individual para mesa operativa o despacho con brazo orientable.',
  },
  {
    sku: 'RO-COM-002',
    slug: 'soporte-monitor-articulado',
    name: 'Soporte monitor articulado',
    categorySlug: 'complementos',
    categoryName: 'Complementos',
    condition: 'nuevo',
    priceCents: 7400,
    stockQty: 16,
    brand: 'Actiu',
    imageUrl: '/imgs/office-hero.jpg',
    description: 'Soporte ergonómico para elevar pantalla y liberar superficie de trabajo.',
  },
  {
    sku: 'RO-COM-003',
    slug: 'papelera-metalica-reacondicionada',
    name: 'Papelera metálica reacondicionada',
    categorySlug: 'complementos',
    categoryName: 'Complementos',
    condition: 'reacondicionado',
    priceCents: 2400,
    stockQty: 40,
    brand: 'Ofiponiente',
    imageUrl: '/imgs/archive.jpg',
    description: 'Complemento reacondicionado para puestos, despachos y salas de reunión.',
  },
  {
    sku: 'RO-REA-001',
    slug: 'lote-sillas-operativas-reacondicionadas',
    name: 'Lote sillas operativas reacondicionadas',
    categorySlug: 'sillas',
    categoryName: 'Sillas',
    condition: 'reacondicionado',
    priceCents: 89000,
    compareAtPriceCents: 132000,
    stockQty: 1,
    brand: 'Steelcase',
    imageUrl: '/imgs/chair.jpg',
    description: 'Lote de 8 sillas revisadas para implantación rápida de puestos operativos.',
  },
  {
    sku: 'RO-REA-002',
    slug: 'pack-mesas-operativas-reacondicionadas',
    name: 'Pack mesas operativas reacondicionadas',
    categorySlug: 'mesas-escritorios',
    categoryName: 'Mesas y escritorios',
    condition: 'reacondicionado',
    priceCents: 76000,
    compareAtPriceCents: 118000,
    stockQty: 2,
    brand: 'Haworth',
    imageUrl: '/imgs/office-hero.jpg',
    description: 'Conjunto de 6 mesas reacondicionadas para ampliar oficina con ahorro inmediato.',
  },
  {
    sku: 'RO-REA-003',
    slug: 'armarios-reacondicionados-lote',
    name: 'Lote armarios reacondicionados',
    categorySlug: 'almacenaje-archivo',
    categoryName: 'Almacenaje y archivo',
    condition: 'reacondicionado',
    priceCents: 54000,
    compareAtPriceCents: 82000,
    stockQty: 3,
    brand: 'JMM',
    imageUrl: '/imgs/archive.jpg',
    description: 'Lote de armarios revisados para archivo, back office o almacén administrativo.',
  },
];

export function formatPrice(cents: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}

export function getQuoteRequestHref(product: CatalogProduct, refurbishedView = false) {
  const useRefurbishedRoute = refurbishedView || product.condition === 'reacondicionado';
  const route = useRefurbishedRoute
    ? '/mobiliario/reacondicionado'
    : `/mobiliario/${product.categorySlug}`;
  const params = new URLSearchParams({ producto: product.sku });

  if (useRefurbishedRoute) {
    params.set('familia', product.categorySlug);
  }

  return `${route}?${params.toString()}#presupuesto`;
}

export function getCategory(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}

export function getFallbackProducts(categorySlug?: string) {
  if (!categorySlug) return catalogProducts;
  if (categorySlug === 'reacondicionado') {
    return catalogProducts.filter((product) => product.condition === 'reacondicionado');
  }
  return catalogProducts.filter((product) => product.categorySlug === categorySlug);
}

export function getFallbackRefurbishedProducts(familySlug?: string) {
  return catalogProducts.filter((product) => {
    if (product.condition !== 'reacondicionado') return false;
    if (!familySlug) return true;
    return product.categorySlug === familySlug;
  });
}

type CatalogRow = {
  sku: string;
  slug: string;
  name: string;
  category_slug: string;
  category_name: string;
  condition: ProductCondition;
  price_cents: number;
  compare_at_price_cents: number | null;
  stock_qty: number;
  brand: string | null;
  image_url: string | null;
  description: string | null;
};

function mapRow(row: CatalogRow): CatalogProduct {
  return {
    sku: row.sku,
    slug: row.slug,
    name: row.name,
    categorySlug: row.category_slug,
    categoryName: row.category_name,
    condition: row.condition,
    priceCents: row.price_cents,
    compareAtPriceCents: row.compare_at_price_cents ?? undefined,
    stockQty: row.stock_qty,
    brand: row.brand ?? 'Ofiponiente',
    imageUrl: row.image_url ?? '/imgs/office-hero.jpg',
    description: row.description ?? '',
  };
}

export async function getCatalogProducts(categorySlug?: string): Promise<CatalogProduct[]> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return getFallbackProducts(categorySlug);
  }

  const sql = postgres(connectionString, { prepare: false });

  try {
    const rows = categorySlug === 'reacondicionado'
      ? await sql<CatalogRow[]>`
          select
            p.sku,
            p.slug,
            p.name,
            c.slug as category_slug,
            c.name as category_name,
            p.condition,
            p.price_cents,
            p.compare_at_price_cents,
            p.stock_qty,
            p.brand,
            coalesce(pi.url, p.image_url) as image_url,
            p.description
          from public.catalog_products p
          join public.catalog_categories c on c.id = p.category_id
          left join public.catalog_product_images pi
            on pi.product_id = p.id and pi.sort_order = 1
          where p.status = 'active'
            and p.condition = 'reacondicionado'
          order by p.featured desc, p.updated_at desc, p.name asc
        `
      : categorySlug
        ? await sql<CatalogRow[]>`
            select
              p.sku,
              p.slug,
              p.name,
              c.slug as category_slug,
              c.name as category_name,
              p.condition,
              p.price_cents,
              p.compare_at_price_cents,
              p.stock_qty,
              p.brand,
              coalesce(pi.url, p.image_url) as image_url,
              p.description
            from public.catalog_products p
            join public.catalog_categories c on c.id = p.category_id
            left join public.catalog_product_images pi
              on pi.product_id = p.id and pi.sort_order = 1
            where p.status = 'active'
              and c.slug = ${categorySlug}
            order by p.featured desc, p.updated_at desc, p.name asc
          `
        : await sql<CatalogRow[]>`
            select
              p.sku,
              p.slug,
              p.name,
              c.slug as category_slug,
              c.name as category_name,
              p.condition,
              p.price_cents,
              p.compare_at_price_cents,
              p.stock_qty,
              p.brand,
              coalesce(pi.url, p.image_url) as image_url,
              p.description
            from public.catalog_products p
            join public.catalog_categories c on c.id = p.category_id
            left join public.catalog_product_images pi
              on pi.product_id = p.id and pi.sort_order = 1
            where p.status = 'active'
            order by p.featured desc, p.updated_at desc, p.name asc
          `;

    return rows.map(mapRow);
  } catch {
    return getFallbackProducts(categorySlug);
  } finally {
    await sql.end({ timeout: 1 });
  }
}

export async function getRefurbishedProducts(familySlug?: string): Promise<CatalogProduct[]> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return getFallbackRefurbishedProducts(familySlug);
  }

  const sql = postgres(connectionString, { prepare: false });

  try {
    const rows = familySlug
      ? await sql<CatalogRow[]>`
          select
            p.sku,
            p.slug,
            p.name,
            c.slug as category_slug,
            c.name as category_name,
            p.condition,
            p.price_cents,
            p.compare_at_price_cents,
            p.stock_qty,
            p.brand,
            coalesce(pi.url, p.image_url) as image_url,
            p.description
          from public.catalog_products p
          join public.catalog_categories c on c.id = p.category_id
          left join public.catalog_product_images pi
            on pi.product_id = p.id and pi.sort_order = 1
          where p.status = 'active'
            and p.condition = 'reacondicionado'
            and c.slug = ${familySlug}
          order by p.featured desc, p.updated_at desc, p.name asc
        `
      : await sql<CatalogRow[]>`
          select
            p.sku,
            p.slug,
            p.name,
            c.slug as category_slug,
            c.name as category_name,
            p.condition,
            p.price_cents,
            p.compare_at_price_cents,
            p.stock_qty,
            p.brand,
            coalesce(pi.url, p.image_url) as image_url,
            p.description
          from public.catalog_products p
          join public.catalog_categories c on c.id = p.category_id
          left join public.catalog_product_images pi
            on pi.product_id = p.id and pi.sort_order = 1
          where p.status = 'active'
            and p.condition = 'reacondicionado'
          order by p.featured desc, p.updated_at desc, p.name asc
        `;

    return rows.map(mapRow);
  } catch {
    return getFallbackRefurbishedProducts(familySlug);
  } finally {
    await sql.end({ timeout: 1 });
  }
}
