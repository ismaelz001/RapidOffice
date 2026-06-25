create extension if not exists pgcrypto;

create table if not exists public.catalog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  parent_id uuid references public.catalog_categories(id) on delete set null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.catalog_products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  name text not null,
  slug text not null unique,
  category_id uuid not null references public.catalog_categories(id) on delete restrict,
  condition text not null check (condition in ('nuevo', 'reacondicionado')),
  price_cents integer not null check (price_cents >= 0),
  compare_at_price_cents integer check (compare_at_price_cents is null or compare_at_price_cents >= price_cents),
  stock_qty integer not null default 0 check (stock_qty >= 0),
  brand text,
  image_url text,
  description text,
  status text not null default 'active' check (status in ('active', 'draft', 'sold_out', 'archived')),
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.catalog_product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.catalog_products(id) on delete cascade,
  url text not null,
  alt text not null default '',
  sort_order integer not null default 1,
  created_at timestamptz not null default now(),
  unique (product_id, sort_order)
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  email text,
  phone text,
  company text,
  message text,
  source text not null default 'catalog',
  status text not null default 'new' check (status in ('new', 'reviewing', 'quoted', 'won', 'lost', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_request_items (
  id uuid primary key default gen_random_uuid(),
  quote_request_id uuid not null references public.quote_requests(id) on delete cascade,
  product_id uuid not null references public.catalog_products(id) on delete restrict,
  quantity integer not null default 1 check (quantity > 0),
  created_at timestamptz not null default now()
);

create index if not exists catalog_categories_active_sort_idx
  on public.catalog_categories (is_active, sort_order, name);

create index if not exists catalog_products_category_status_idx
  on public.catalog_products (category_id, status, featured, updated_at desc);

create index if not exists catalog_products_condition_status_idx
  on public.catalog_products (condition, status, featured, updated_at desc);

create index if not exists catalog_products_status_stock_idx
  on public.catalog_products (status, stock_qty);

create index if not exists quote_requests_status_created_idx
  on public.quote_requests (status, created_at desc);

insert into public.catalog_categories (name, slug, sort_order, is_active)
values
  ('Sillas', 'sillas', 10, true),
  ('Mesas y escritorios', 'mesas-escritorios', 20, true),
  ('Salas y colectividades', 'salas-colectividades', 30, true),
  ('Almacenaje y archivo', 'almacenaje-archivo', 40, true),
  ('Divisiones', 'divisiones', 50, true),
  ('Complementos', 'complementos', 60, true),
  ('Reacondicionado', 'reacondicionado', 70, true)
on conflict (slug) do update
set
  name = excluded.name,
  sort_order = excluded.sort_order,
  is_active = excluded.is_active,
  updated_at = now();

with seed_products (
  sku, slug, name, category_slug, condition, price_cents, compare_at_price_cents,
  stock_qty, brand, image_url, description, featured
) as (
  values
    ('RO-SIL-001', 'silla-operativa-malla-zas', 'Silla operativa respaldo malla Zas', 'sillas', 'nuevo', 14760, 16400, 12, 'Dynamobel', '/imgs/chair.jpg', 'Silla ergonómica de trabajo diario con respaldo transpirable, brazos regulables y base con ruedas.', true),
    ('RO-SIL-002', 'silla-direccion-please-2-reacondicionada', 'Silla dirección Please 2 reacondicionada', 'sillas', 'reacondicionado', 39500, null, 4, 'Steelcase', '/imgs/executive-office.jpg', 'Modelo de dirección reacondicionado, revisado y preparado para despacho o puesto intensivo.', true),
    ('RO-SIL-003', 'silla-confidente-sala-espera', 'Silla confidente para visita', 'sillas', 'nuevo', 8900, null, 20, 'Forma 5', '/imgs/meeting-room.jpg', 'Silla fija para visitas, salas de reunión y zonas de espera con estructura resistente.', false),
    ('RO-MES-001', 'mesa-operativa-160-blanca', 'Mesa operativa 160 cm blanca', 'mesas-escritorios', 'nuevo', 22900, null, 15, 'Actiu', '/imgs/despacho.png', 'Mesa recta para puesto individual con estructura metálica y tablero técnico de alta resistencia.', true),
    ('RO-MES-002', 'bench-multipuesto-4-personas', 'Sistema bench multipuesto 4 personas', 'mesas-escritorios', 'nuevo', 118000, null, 5, 'JG Group', '/imgs/office-hero.jpg', 'Sistema de trabajo compartido para cuatro puestos con canalización central y separadores opcionales.', false),
    ('RO-MES-003', 'mesa-direccion-reacondicionada-nogal', 'Mesa de dirección reacondicionada nogal', 'mesas-escritorios', 'reacondicionado', 42000, 68000, 2, 'Haworth', '/imgs/executive-office.jpg', 'Mesa premium reacondicionada para despacho de dirección, revisada y lista para instalación.', true),
    ('RO-SAL-001', 'mesa-reunion-ovalada-8-personas', 'Mesa de reunión ovalada 8 personas', 'salas-colectividades', 'nuevo', 69000, null, 3, 'Forma 5', '/imgs/meeting-room.jpg', 'Mesa para salas de reunión medianas con tablero amplio y estructura preparada para conectividad.', true),
    ('RO-SAL-002', 'pack-aula-formacion-12-puestos', 'Pack aula formación 12 puestos', 'salas-colectividades', 'nuevo', 154000, null, 4, 'Mepel', '/imgs/office-hero.jpg', 'Conjunto de mesas y sillas para formación, academias y salas polivalentes.', false),
    ('RO-SAL-003', 'bancada-sala-espera-3-plazas', 'Bancada sala de espera 3 plazas', 'salas-colectividades', 'reacondicionado', 18500, null, 6, 'AIC', '/imgs/chair.jpg', 'Bancada reacondicionada para recepción, sala de espera o zonas comunes.', false),
    ('RO-ALM-001', 'armario-metalico-puertas-correderas', 'Armario metálico puertas correderas', 'almacenaje-archivo', 'nuevo', 31500, null, 8, 'JMM', '/imgs/archive.jpg', 'Armario de archivo para documentación, carpetas y material operativo de oficina.', true),
    ('RO-ALM-002', 'cajonera-rodante-3-cajones', 'Cajonera rodante 3 cajones', 'almacenaje-archivo', 'nuevo', 11900, null, 18, 'Actiu', '/imgs/archive.jpg', 'Cajonera móvil para puesto individual, con cerradura y ruedas.', false),
    ('RO-ALM-003', 'archivador-reacondicionado-4-cajones', 'Archivador reacondicionado 4 cajones', 'almacenaje-archivo', 'reacondicionado', 16500, null, 7, 'Sedus', '/imgs/archive.jpg', 'Archivador revisado para expedientes, documentación o back office.', false),
    ('RO-DIV-001', 'mampara-cristal-modular', 'Mampara modular de cristal', 'divisiones', 'nuevo', 98000, null, 6, 'Ofiponiente', '/imgs/divisions.jpg', 'Sistema modular para separar despachos y salas manteniendo entrada de luz natural.', true),
    ('RO-DIV-002', 'panel-acustico-sobremesa', 'Panel acústico sobremesa', 'divisiones', 'nuevo', 7600, null, 30, 'Sedus', '/imgs/divisions.jpg', 'Separador acústico para bench y puestos compartidos.', false),
    ('RO-DIV-003', 'biombo-movil-tapizado', 'Biombo móvil tapizado', 'divisiones', 'reacondicionado', 13200, null, 5, 'Forma 5', '/imgs/divisions.jpg', 'Separador móvil reacondicionado para dividir zonas de trabajo o espera.', false),
    ('RO-COM-001', 'lampara-led-puesto-trabajo', 'Lámpara LED para puesto de trabajo', 'complementos', 'nuevo', 5900, null, 25, 'Ofiponiente', '/imgs/despacho.png', 'Iluminación individual para mesa operativa o despacho con brazo orientable.', true),
    ('RO-COM-002', 'soporte-monitor-articulado', 'Soporte monitor articulado', 'complementos', 'nuevo', 7400, null, 16, 'Actiu', '/imgs/office-hero.jpg', 'Soporte ergonómico para elevar pantalla y liberar superficie de trabajo.', false),
    ('RO-COM-003', 'papelera-metalica-reacondicionada', 'Papelera metálica reacondicionada', 'complementos', 'reacondicionado', 2400, null, 40, 'Ofiponiente', '/imgs/archive.jpg', 'Complemento reacondicionado para puestos, despachos y salas de reunión.', false),
    ('RO-REA-001', 'lote-sillas-operativas-reacondicionadas', 'Lote sillas operativas reacondicionadas', 'sillas', 'reacondicionado', 89000, 132000, 1, 'Steelcase', '/imgs/chair.jpg', 'Lote de 8 sillas revisadas para implantación rápida de puestos operativos.', true),
    ('RO-REA-002', 'pack-mesas-operativas-reacondicionadas', 'Pack mesas operativas reacondicionadas', 'mesas-escritorios', 'reacondicionado', 76000, 118000, 2, 'Haworth', '/imgs/office-hero.jpg', 'Conjunto de 6 mesas reacondicionadas para ampliar oficina con ahorro inmediato.', true),
    ('RO-REA-003', 'armarios-reacondicionados-lote', 'Lote armarios reacondicionados', 'almacenaje-archivo', 'reacondicionado', 54000, 82000, 3, 'JMM', '/imgs/archive.jpg', 'Lote de armarios revisados para archivo, back office o almacén administrativo.', false)
)
insert into public.catalog_products (
  sku, slug, name, category_id, condition, price_cents, compare_at_price_cents,
  stock_qty, brand, image_url, description, status, featured
)
select
  seed_products.sku,
  seed_products.slug,
  seed_products.name,
  catalog_categories.id,
  seed_products.condition,
  seed_products.price_cents,
  seed_products.compare_at_price_cents,
  seed_products.stock_qty,
  seed_products.brand,
  seed_products.image_url,
  seed_products.description,
  'active',
  seed_products.featured
from seed_products
join public.catalog_categories on catalog_categories.slug = seed_products.category_slug
on conflict (sku) do update
set
  slug = excluded.slug,
  name = excluded.name,
  category_id = excluded.category_id,
  condition = excluded.condition,
  price_cents = excluded.price_cents,
  compare_at_price_cents = excluded.compare_at_price_cents,
  stock_qty = excluded.stock_qty,
  brand = excluded.brand,
  image_url = excluded.image_url,
  description = excluded.description,
  status = excluded.status,
  featured = excluded.featured,
  updated_at = now();

insert into public.catalog_product_images (product_id, url, alt, sort_order)
select id, image_url, name, 1
from public.catalog_products
where sku in (
  'RO-SIL-001', 'RO-SIL-002', 'RO-SIL-003',
  'RO-MES-001', 'RO-MES-002', 'RO-MES-003',
  'RO-SAL-001', 'RO-SAL-002', 'RO-SAL-003',
  'RO-ALM-001', 'RO-ALM-002', 'RO-ALM-003',
  'RO-DIV-001', 'RO-DIV-002', 'RO-DIV-003',
  'RO-COM-001', 'RO-COM-002', 'RO-COM-003',
  'RO-REA-001', 'RO-REA-002', 'RO-REA-003'
)
on conflict (product_id, sort_order) do update
set
  url = excluded.url,
  alt = excluded.alt;
