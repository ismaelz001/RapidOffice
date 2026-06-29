# Ofiponiente Digital — Roadmap Ejecutivo

**Proyecto:** Plataforma B2B SaaS para venta de mobiliario de oficina y soluciones de espacios de trabajo.
**Stack:** Next.js 14.0.4 + Supabase + Tailwind CSS
**Versión:** Roadmap 1.1 (actualizado 2026-06-29)

---

## 📊 Progreso General

```
Fase 1: [████████████████] 100% ✅ COMPLETADA
Fase 2: [████████████████] 100% ✅ COMPLETADA
Fase 3: [░░░░░░░░░░░░░░░░] 0%
Fase 4: [░░░░░░░░░░░░░░░░] 0%
Fase 5: [░░░░░░░░░░░░░░░░] 0%
Fase 6: [░░░░░░░░░░░░░░░░] 0%
Fase 7: [░░░░░░░░░░░░░░░░] 0%
Fase 8: [░░░░░░░░░░░░░░░░] 0%
Fase 9: [░░░░░░░░░░░░░░░░] 0%

MVP comercial inicial: ~75% (captación y trazabilidad implementadas)
```

---

## ✅ Fase 1 — Limpieza arquitectónica

**Estado:** COMPLETADA (commit `22df524`, 2026-06-25)

### Tareas completadas:
- [x] Archivar `backend/` (FastAPI legacy) → `docs/archive/legacy-backend/backend/`
- [x] Archivar prototipo local `planificacion-de-oficinas/` → `docs/archive/planificacion-de-oficinas/`
- [x] Documento ADR 0004: Backend Architecture (Supabase client-only, sin FastAPI)
- [x] Documento ADR 0005: `planificaciondeoficinas.com` como dominio futuro aparcado hasta aviso del PO
- [x] Auditar 8 agents — remover refs FastAPI/Neon/JWT legacy ✅
- [x] Auditar docs/ — refs legacy solo en archivos históricos ✅
- [x] Limpiar `.gitignore` (agregar `tsconfig.tsbuildinfo`)
- [x] Validar `git status` — repo raíz clean ✅

### Resultado:
✅ **Arquitectura clara, decidida, documentada.**
⚠️ **La auditoría del 2026-06-29 detectó frontend legacy activo; su retirada se incorpora al cierre de Fase 2.**
✅ **ADRs disponibles para futuras decisiones.**
⏸️ **`planificaciondeoficinas.com` queda fuera del alcance activo hasta nueva instrucción del PO.**

**Referencia:**
- [ADR 0004 — Backend Architecture](docs/decisions/0004-backend-architecture.md)
- [ADR 0005 — Planificacion scope](docs/decisions/0005-planificaciondeoficinas-scope.md)

---

## 🔄 Fase 2 — Captación real de leads

**Estado:** EN PROGRESO
**Requisito previo:** Fase 1 ✅ completada
**Timeline estimado:** 1-2 sprints
**Spec operativa:** [docs/specs/phase-2-lead-capture/](specs/phase-2-lead-capture/)

### Descripción:
Conectar todos los puntos de contacto (home, catálogo, planner) a Supabase para empezar a capturar **quote requests** reales. Esto establece el primer flow de valor: usuario → formulario → BD.

### Tareas clave:

#### 2.1 — Formularios de captura en home + catálogos
- [x] Diseñar/refinar formulario mínimo de solicitud
- [x] Conectar home CTA form → `quote_requests` table
- [x] Conectar categorías → inline "Solicitar presupuesto" button
- [x] Conectar categoría page → "Presupuesto" form con contexto de categoría
- [x] Conectar reacondicionado page con origen `refurbished`
- [x] Conservar producto y cantidad al pulsar "Añadir a presupuesto"

#### 2.2 — Persistencia del planner actual
- [x] Evaluar si el HTML actual puede enviar un lead mínimo sin rediseño
- [x] Guardar estado básico del planner en `quote_requests`
- [x] Guardar selección/productos en `quote_request_items`
- [x] Mantener el diseño actual salvo ajuste mínimo necesario para enviar datos

#### 2.3 — Source tracking + metadatos
- [x] Usar y normalizar la columna `source` ya existente en `quote_requests` (home / categoría / planner)
- [x] Capturar timestamp por `created_at` y URL origen en el mensaje/contexto
- [ ] Opcional: identificar usuario anónimo (cookie tracking)

#### 2.4 — UX de confirmación
- [x] Confirmación inline post-envío
- [x] Preparar integración transaccional de email sin activarla hasta el setup del PO
- [x] Mostrar número de solicitud al usuario
- [ ] Página de "gracias" con next steps

La página de gracias queda diferida: la confirmación inline con número cubre el criterio de aceptación sin añadir navegación innecesaria.

#### 2.5 — Hardening antes de cerrar la fase
- [x] Retirar u ocultar `/login`, `/admin`, `/projects`, `/editor` y `/share` mientras no exista autenticación real.
- [x] Eliminar credenciales de demo publicadas en cliente.
- [x] Sustituir u ocultar dirección, teléfono y enlaces legales ficticios.
- [x] Añadir icono de aplicación para dejar la consola de producción limpia.
- [x] Alinear ADR 0004 con el acceso real a Supabase.

### Archivos a modificar:
```
frontend/app/page.tsx                       — home form
frontend/app/mobiliario/[category]/page.tsx — category form
frontend/app/mobiliario/page.tsx            — reacondicionado form
frontend/public/planifica-tu-espacio/index.html — planner actual estático
frontend/lib/catalog.ts                     — revisar acceso a Supabase si hace falta
```

### Fuera de alcance en Fase 2:
- Configurar `planificaciondeoficinas.com`.
- Crear un deploy/proyecto separado para planificación.
- Rediseñar por completo el planner.
- Construir el CRM completo.
- Implementar pagos o anticipo 50%.

### Validación:
- [x] Home, categoría y planner probados en producción
- [x] Filas verificadas en Supabase y datos TEST eliminados
- [x] Confirmación con número visible
- [x] Error y responsive móvil probados en producción
- [x] Consola limpia en Home, catálogo y planner
- [x] Round-trip de producto reacondicionado verificado hasta `quote_request_items`
- [x] Datos TEST eliminados y cascada comprobada
- [x] Integración de email preparada y desactivada hasta configurar proveedor, dominio y remitentes

---

## 🏢 Fase 3 — CRM interno (gestión de leads)

**Estado:** PENDIENTE
**Requisito previo:** Fase 2 ✅
**Timeline estimado:** 1 sprint

### Descripción:
Dashboard interno donde el equipo de ventas pueda ver leads, cambiar estado, agregar notas y dar seguimiento.

### Tareas clave:

#### 3.1 — Tabla de leads en dashboard
- [ ] Proteger acceso con auth (`/dashboard` solo para usuarios internos)
- [ ] Listar todos los `quote_requests` con filtros (estado, fecha, origen)
- [ ] Mostrar: nombre, email, teléfono, productos, fecha, estado
- [ ] Sorting por fecha (más recientes primero)

#### 3.2 — Detalle de lead
- [ ] Panel lateral/modal con detalles completos
- [ ] Mostrar layout/planner original si aplica
- [ ] Comentarios/historial de cambios
- [ ] Botones: "Cambiar estado" (nuevo→contactado→presupuesto enviado→ganado/perdido)

#### 3.3 — Automatización básica
- [ ] Cambiar estado → email automático al cliente ("Recibimos tu solicitud")
- [ ] Exportar leads a CSV (para envíos masivos)
- [ ] Búsqueda por nombre/email

### Archivos nuevos:
```
frontend/app/(auth)/dashboard/page.tsx          — dashboard principal
frontend/app/(auth)/dashboard/lead/[id]/page.tsx — detalle lead
frontend/components/LeadTable.tsx               — table component
frontend/components/LeadDetail.tsx              — modal/panel detalles
frontend/lib/lead-management.ts                 — helper functions
```

### Validación:
- Login → acceso dashboard
- Ver y filtrar 10+ leads ficticios
- Cambiar estado de un lead

---

## 📄 Fase 4 — Páginas de productos individuales

**Estado:** PENDIENTE
**Requisito previo:** Fase 2 ✅
**Timeline estimado:** 1-2 sprints

### Descripción:
Cada producto en catálogo tiene página propia con specs técnicas, dimensiones, imágenes, precio y CTA.

### Tareas clave:

#### 4.1 — Página de producto (PRODUCT STANDARD)
- [ ] URL: `/mobiliario/[category]/[product-slug]`
- [ ] Contenido mínimo:
  - Galería de imágenes (slider o grid)
  - Ficha técnica (dimensiones, materiales, especificaciones)
  - Precio (normal y reacondicionado si aplica)
  - "Productos relacionados"
  - "Solicitar presupuesto" CTA
  - Breadcrumb + navegación

#### 4.2 — Migración de datos
- [ ] Agregar campos a `catalog_products` (specs_json, materials, dimensions_cm)
- [ ] Migración Supabase para rellenar datos históricos
- [ ] Validación: 50+ productos con specs completas

#### 4.3 — Schema.org + SEO
- [ ] Structured data: Product, Offer, AggregateRating
- [ ] Meta tags: title, description, og:image
- [ ] Alt text en imágenes

### Archivos nuevos:
```
frontend/app/mobiliario/[category]/[slug]/page.tsx — product page
frontend/components/ProductGallery.tsx             — image slider
frontend/components/ProductSpecs.tsx               — tech specs
frontend/lib/product-schema.ts                     — structured data
```

### Validación:
- Abrir 3 productos distintos → carga correcta
- Datos en Supabase visible en página
- Schema.org válido en Google Rich Results tester

---

## 🏷️ Fase 5 — Páginas de categorías mejoradas

**Estado:** PENDIENTE
**Requisito previo:** Fase 4 ✅
**Timeline estimado:** 1 sprint

### Descripción:
Cada categoría (Escritorios, Sillas, etc.) tiene página dedicada con hero, introducción, subcategorías, FAQ y schema.

### Tareas clave:

#### 5.1 — Página de categoría (CATEGORY STANDARD)
- [ ] URL: `/mobiliario/[category]`
- [ ] Contenido:
  - Hero section (background, headline, CTA)
  - Introducción (por qué esta categoría importa)
  - Subcategorías (si aplica: Escritorios ejecutivos, workstations, etc.)
  - Tabla de productos filtrados
  - FAQ específica de categoría
  - "Diseña tu espacio" CTA al planner
  - Breadcrumb

#### 5.2 — Componentes reutilizables
- [ ] CategoryHero
- [ ] SubcategoryList
- [ ] ProductGrid (con filtros: precio, material, color)
- [ ] CategoryFAQ

#### 5.3 — Schema.org
- [ ] BreadcrumbList
- [ ] Category structured data
- [ ] FAQPage schema

### Validación:
- Abrir `/mobiliario/escritorios`, `/mobiliario/sillas` → designs consistency
- Filtros funcionan

---

## 📝 Fase 6 — Blog de contenido + SEO

**Estado:** PENDIENTE
**Requisito previo:** Fase 5 ✅
**Timeline estimado:** 2-3 sprints

### Descripción:
Blog informativo para captar tráfico orgánico de keywords relacionadas con mobiliario y diseño de oficinas. Cada artículo es un mini-funnel hacia presupuesto.

### Tareas clave:

#### 6.1 — Estructura del blog
- [ ] URL: `/blog/[slug]`
- [ ] CMS: Markdown en repo (git-based) O Headless CMS (Sanity/Strapi)
- [ ] Plantilla de artículo: título, intro, secciones, imágenes, CTA embebida
- [ ] Listado de posts con filtros (por categoría, fecha)

#### 6.2 — Contenido pillar
- [ ] 5-10 artículos "Guía de" (ej: "Guía de diseño de open space", "Cómo elegir sillas ergonómicas")
- [ ] 10-15 artículos "Case studies" (ej: "Caso: startup tech con 50 personas")
- [ ] Cada artículo → formulario "Presupuesto personalizado" contextualized

#### 6.3 — Schema.org + SEO avanzado
- [ ] Article schema
- [ ] Blog index sitemap
- [ ] Internal linking strategy (blog → product pages)
- [ ] Keyword targeting (research en `/docs/research/keyword-strategy.md`)

#### 6.4 — Keyword research
- [ ] Identificar 50+ keywords SEO (mobiliario + oficina + ciudad)
- [ ] Mapear keywords a landing pages / artículos
- [ ] Competitive analysis: qué keywords usan competidores

### Archivos nuevos:
```
frontend/app/blog/page.tsx                 — blog index
frontend/app/blog/[slug]/page.tsx          — blog post
frontend/components/BlogCard.tsx           — post preview
frontend/components/BlogCTA.tsx            — CTA contextualizado
docs/research/keyword-strategy.md          — keyword research
content/blog/                              — artículos en markdown
```

### Validación:
- Blog index muestra 5+ posts
- Post abre correctamente con imágenes
- Article schema válido

---

## 🚀 Fase 7 — Optimización SEO + velocidad

**Estado:** PENDIENTE
**Requisito previo:** Fase 6 ✅
**Timeline estimado:** 1 sprint

### Descripción:
Core Web Vitals, images optimization, lazy loading, structured data global, robots.txt, sitemap.

### Tareas clave:

#### 7.1 — Core Web Vitals
- [ ] LCP < 2.5s (lazy load images, optimize bundles)
- [ ] FID < 100ms (reduce main thread work)
- [ ] CLS < 0.1 (reserve space for ads, images)
- [ ] Lighthouse score > 90

#### 7.2 — Image optimization
- [ ] Convert JPG → WebP
- [ ] Responsive images (srcset)
- [ ] Lazy loading (loading="lazy")
- [ ] Size optimization (ImageOptim, Tinypng)

#### 7.3 — SEO técnico
- [ ] `/robots.txt` (permitir Googlebot, bloquear spambots)
- [ ] `/sitemap.xml` (producto, categoría, blog)
- [ ] Canonical links (evitar duplicados)
- [ ] 301 redirects (old URLs → new)
- [ ] hreflang (si multi-idioma futuro)

#### 7.4 — Herramientas de monitoreo
- [ ] Google Search Console (verificar indexación)
- [ ] Google Analytics 4 (tráfico, conversiones)
- [ ] Sentry (error tracking)

### Validación:
- `npx next build` → análisis bundle
- Lighthouse: >=90 en todos scores
- Search Console: 0 errores de indexación

---

## 💌 Fase 8 — Automatización de emails + seguimiento

**Estado:** PENDIENTE
**Requisito previo:** Fase 3 ✅
**Timeline estimado:** 1 sprint

### Descripción:
Workflows de email para dar seguimiento automático a leads: confirmación, recordatorios, upsell.

### Tareas clave:

#### 8.1 — Email sequences
- [ ] Confirmación de solicitud (5 min después)
- [ ] Recordatorio de presupuesto (3 días)
- [ ] Recomendación personalizada (1 semana, basada en planner)
- [ ] "Vimos que miraste sillas" (retargeting email)

#### 8.2 — Integración email service
- [ ] Resend o SendGrid (proveedores recomendados)
- [ ] Templates HTML responsivos
- [ ] Tracking: open rate, click rate
- [ ] Unsubscribe links + compliance

#### 8.3 — Segmentación de leads
- [ ] Leads por origen (home vs planner vs blog)
- [ ] Leads por rango presupuestario
- [ ] Leads por categoría de interés

### Validación:
- Enviar test email → recibir en 2 min
- Dashboard de Resend/SendGrid muestra sends + opens

---

## 📊 Fase 9 — Analytics avanzado + reporte

**Estado:** PENDIENTE
**Requisito previo:** Fase 8 ✅
**Timeline estimado:** 1-2 sprints

### Descripción:
Dashboard de KPIs para seguimiento de negocio: conversión, LTV, CAC, ROI de marketing.

### Tareas clave:

#### 9.1 — Eventos de conversión
- [ ] Evento: `lead_created` (formulario enviado)
- [ ] Evento: `quote_sent` (presupuesto enviado)
- [ ] Evento: `deal_won` (venta cerrada)
- [ ] Evento: `blog_viewed`, `product_viewed` (top-of-funnel)

#### 9.2 — Dashboard de reportes
- [ ] Leads por semana (gráfico de tendencia)
- [ ] Tasa de conversión: visitantes → leads
- [ ] Tasa de cierre: leads → clientes
- [ ] ROI por canal (orgánico, directo, email)
- [ ] Productos más solicitados
- [ ] Categorías con más tráfico

#### 9.3 — Exportes + alertas
- [ ] CSV export de leads + conversiones
- [ ] Email semanal de resumen (para management)
- [ ] Alert si CAC > X€

### Archivos nuevos:
```
frontend/app/(auth)/analytics/page.tsx     — analytics dashboard
frontend/components/ReportChart.tsx        — chart components
frontend/lib/analytics.ts                  — events + tracking
```

### Validación:
- Dashboard muestra datos de 30 días
- PDF export generado correctamente

---

## 🎯 Checkpoints clave (revisiones entre fases)

Después de cada fase, **antes de comenzar la siguiente**:

- [ ] Código TypeScript limpio (`npx tsc --noEmit`)
- [ ] Tests pasando (`npm test`)
- [ ] Lighthouse >= 85
- [ ] Ningún warning en console
- [ ] Commit y push a `main`
- [ ] Actualizar este roadmap con progreso real

---

## 📌 Links de referencia rápida

| Documento | Propósito |
|-----------|-----------|
| [docs/master/ofiponiente-digital-master.md](docs/master/ofiponiente-digital-master.md) | Verdad única del proyecto |
| [docs/decisions/](docs/decisions/) | Decisiones arquitectónicas (ADR 0001-0005) |
| [.agents/ceo-agent.md](.agents/ceo-agent.md) | Agente para decisiones estratégicas |
| [.agents/fullstack-agent.md](.agents/fullstack-agent.md) | Agente para arquitectura + implementación |
| [supabase/migrations/](supabase/migrations/) | Esquema de BD versionado |
| [docs/standards/](docs/standards/) | Product, Category, Blog, Ecommerce standards |

---

## 📅 Timeline estimado (con paralelización)

```
Semana 1-2:   Fase 2 (lead capture)
Semana 3:     Fase 3 (CRM interno)
Semana 4-5:   Fase 4 (product pages) + Fase 5 (category pages) en paralelo
Semana 6-8:   Fase 6 (blog + keyword research)
Semana 9:     Fase 7 (SEO técnico + velocidad)
Semana 10:    Fase 8 (email automation)
Semana 11-12: Fase 9 (analytics) + optimización final

Total: 12 semanas (3 meses) para MVP completo y optimizado
```

---

**Última actualización:** 2026-06-29
**Próxima revisión:** Después del hardening de producción y cierre de trazabilidad de producto
