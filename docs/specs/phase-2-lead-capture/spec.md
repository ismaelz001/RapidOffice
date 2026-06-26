# Fase 2 — Captación real de leads

## Estado

| Campo | Valor |
| --- | --- |
| Estado | En preparación |
| Fecha | 2026-06-26 |
| Roadmap | `ROADMAP.md`, `docs/ROADMAP.md` |
| Fase previa | Fase 1 completada |

## Objetivo

Conectar los puntos actuales de contacto de Ofiponiente Digital con Supabase para que las solicitudes reales queden registradas como `quote_requests`.

El objetivo de esta fase no es construir un CRM completo ni un ecommerce cerrado. El objetivo es que el canal digital empiece a generar oportunidades comerciales trazables.

## Fuente de verdad

- `docs/master/ofiponiente-digital-master.md`
- `docs/business/business-model.md`
- `docs/standards/landing-page-standard.md`
- `docs/standards/product-standard.md`
- `docs/standards/category-standard.md`
- `docs/playbooks/keyword-research-playbook.md`
- `docs/decisions/0001-database-supabase.md`
- `docs/decisions/0004-backend-architecture.md`
- `docs/decisions/0005-planificaciondeoficinas-scope.md`
- `ROADMAP.md`
- `docs/ROADMAP.md`

## Estado actual confirmado

Existe:

- Frontend activo en `frontend/` con Next.js 14.0.4.
- Supabase como base de datos principal.
- Migración `supabase/migrations/20260625_catalog.sql`.
- Tablas:
  - `catalog_categories`
  - `catalog_products`
  - `catalog_product_images`
  - `quote_requests`
  - `quote_request_items`
- Catálogo inicial con productos nuevos y reacondicionados.
- Home con formulario visual en `frontend/app/page.tsx`.
- Página de catálogo en `frontend/app/mobiliario/page.tsx`.
- Páginas de categoría en `frontend/app/mobiliario/[category]/page.tsx`.
- Planner actual estático en `frontend/public/planifica-tu-espacio/index.html`.

No existe todavía:

- Envío real de formularios a Supabase.
- API/acción estable para crear solicitudes.
- UX de confirmación con número de solicitud.
- Source tracking normalizado.
- Persistencia del estado del planner.
- Email automático de confirmación.

## Alcance incluido

### 2.1 — Solicitudes desde home y catálogo

- Crear endpoint/acción segura para insertar en `quote_requests`.
- Validar nombre y al menos un método de contacto.
- Guardar origen (`source`).
- Guardar mensaje/contexto de la solicitud.
- Mostrar confirmación al usuario.

### 2.2 — Solicitudes desde categorías

- Conectar el formulario de cada categoría.
- Añadir contexto de categoría en el mensaje.
- Mantener diseño actual salvo ajustes mínimos de estado/loading/error.

### 2.3 — Planner actual

- Mantener el diseño del HTML actual.
- Añadir envío mínimo del estado guardado.
- Registrar el lead en `quote_requests`.
- No rediseñar el cuestionario.

### 2.4 — Tracking básico

- Origen: `home`, `catalog`, `category`, `refurbished`, `planner`.
- URL de origen dentro del mensaje o metadatos si se añade migración posterior.
- Fecha ya cubierta por `created_at`.

## Fuera de alcance

- Configurar `planificaciondeoficinas.com`.
- Crear proyecto/deploy separado para planificación.
- Rediseñar completo el planner.
- Construir CRM interno.
- Implementar pagos o anticipo del 50%.
- Automatización avanzada de emails.
- Fichas individuales de producto.
- Nuevas categorías SEO profundas.

## Decisión operativa para esta fase

Aunque `docs/decisions/0004-backend-architecture.md` indica uso de `@supabase/supabase-js`, el código activo ya usa `postgres` con `DATABASE_URL` para leer datos de Supabase desde Next.js.

Para evitar introducir dependencias y patrones paralelos en mitad de Fase 2, el primer slice usará el patrón existente del repositorio:

- Acceso servidor desde Next.js.
- `DATABASE_URL`.
- Consultas parametrizadas.
- Sin backend FastAPI.

Si más adelante se decide migrar a `@supabase/supabase-js`, deberá documentarse como ADR o actualización de ADR 0004 y hacerse como refactor separado.

## Reglas de persistencia

- No modificar ni eliminar columnas existentes.
- Preferir cambios aditivos.
- No usar `quote_request_items` para planner salvo que exista un `product_id` real.
- Para el primer slice, el contexto no estructurado puede guardarse en `message`.
- Si se necesita analítica estructurada, crear migración aditiva posterior con `metadata jsonb`.

## Criterios de aceptación

- Una solicitud desde home crea una fila en `quote_requests`.
- Una solicitud desde categoría crea una fila con source/contexto correcto.
- Una solicitud desde planner crea una fila sin romper el diseño actual.
- El usuario ve confirmación clara después de enviar.
- Los errores se muestran sin perder el formulario.
- TypeScript valida.
- Tests existentes siguen pasando.

