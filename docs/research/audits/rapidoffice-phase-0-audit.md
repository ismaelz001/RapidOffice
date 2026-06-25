# Fase 0 — Auditoría de RapidOffice y matriz de reutilización

> Entregable de la Fase 0 (sección 15.4 del máster).
> Fecha: 2026-06-18 · Estado del repo auditado: `f:\rapidOffice` (prototipo RapidOffice).
> Objetivo: decidir, a nivel de archivo, qué se porta, qué se reescribe y qué se descarta para `planificacion-de-oficinas`.

---

## 1. Resumen ejecutivo

RapidOffice es un prototipo funcional Next.js (frontend) + FastAPI (backend) con:

- Landing pública premium con animación GSAP avanzada (intro, cursor custom, sección proceso con pinning).
- Editor 2D Konva con grid snapping, drag & drop, inspector y presupuesto en vivo.
- Flujo de proyectos (crear, listar, abrir, guardar, compartir) con cálculo de totales en servidor.
- Autenticación JWT en `localStorage` (a descartar).

**Veredicto general:** el **valor visual y conceptual es alto**; el **valor de código de plataforma es bajo-medio**. Se porta el diseño y el principio del editor/cálculo; se reescribe toda la capa de datos, tipos, auth y API sobre el nuevo stack (Next.js full-stack + Neon + Drizzle + Better Auth).

---

## 2. Stack visual detectado (a conservar)

| Token | Valor | Acción |
|---|---|---|
| Color marca | `ofi.pink #EA43A5` / `pink-dark #C92E88` / `pink-light #F7C5E3` | Conservar (coincide con magenta Ofiponiente) |
| Base | `black #000`, `offwhite #F5F5F5`, `border #1E1E1E` | Conservar (dirección dark premium) |
| Tipografías | Clash Display (display), DM Sans (texto), Bauhaus (decorativa) | Conservar — **verificar licencias antes de producción** |
| Animación | GSAP + ScrollTrigger | Portar selectivamente, simplificar |

---

## 3. Matriz de reutilización a nivel de archivo

Leyenda de acción: **Portar** (adaptar) · **Reescribir** (concepto sí, código no) · **Descartar** · **Referencia** (archivar).

### Frontend

| Archivo | Líneas | Acción | Prioridad | Justificación |
|---|---:|---|---|---|
| `frontend/app/page.tsx` | 880 | **Reescribir** (trocear) | Alta | Landing monolítica. Portar bloques visuales (intro GSAP, hero, categorías, galería, proceso) pero dividir en componentes/secciones por ruta. El doc lo marca explícitamente. |
| `frontend/tailwind.config.ts` | — | **Portar** | Alta | Tokens de marca reutilizables casi directos. |
| `frontend/components/CanvasStage.tsx` | 186 | **Portar** | Media | Konva dynamic-load, grid, drag, transformer. Adaptar modelo de escala (px→cm real) y deshacer/rehacer. Portar **después** del CRM básico. |
| `frontend/components/InspectorPanel.tsx` | 118 | **Portar** | Media | Buen patrón inspector + resumen presupuesto. Adaptar a variantes y a totales de servidor reales. |
| `frontend/components/CatalogSidebar.tsx` | 40 | **Portar** | Media | Catálogo lateral con drag source. Adaptar al modelo de producto real. |
| `frontend/components/ShareModal.tsx` | 70 | **Reescribir** | Media | Compartición pública: rehacer con tokens seguros y permisos. |
| `frontend/components/TopBar.tsx` | 85 | **Portar** | Baja | UI editor reutilizable, adaptar branding. |
| `frontend/components/CookieConsentBanner.tsx` | 47 | **Portar** | Alta | Ya cumple estándar Rodorte cookies. Reutilizable casi directo. |
| `frontend/app/cookies/page.tsx` | 47 | **Portar** | Alta | Política de cookies Rodorte. Reutilizable. |
| `frontend/lib/types.ts` | 56 | **Descartar** | Alta | Tipos inconsistentes (id `number` vs UUID backend, `owner_id` vs `user_id`, campos legacy `price`/`width`, `[key:string]:any`). Fuente única nueva con Drizzle/Zod. |
| `frontend/lib/api.ts` | 39 | **Descartar** | Alta | Cliente genérico sin contratos, lee token de `localStorage`, redirección brusca a `/login`. Sustituir por server actions / fetch tipado. |
| `frontend/lib/storage.ts` | 19 | **Descartar** | Alta | Token en `localStorage`. Incompatible con Better Auth (cookies httpOnly). |
| `frontend/lib/utils.ts` | 40 | **Portar** | Media | `formatCurrency`, `generateQuoteText` reutilizables con ajuste. |
| `frontend/lib/cookie-consent.ts` | 18 | **Portar** | Alta | Lógica de consentimiento Rodorte. Reutilizable. |
| `frontend/hooks/useAuth.ts` | 22 | **Descartar** | Alta | Basado en token local + redirección cliente. Better Auth da sesión de servidor. |
| `frontend/hooks/useAutosave.ts` | 24 | **Portar** | Media | Patrón autosave útil para el editor. Adaptar a server actions. |
| `frontend/hooks/useProject.ts` | 40 | **Reescribir** | Alta | Concepto sí; rehacer sobre modelo CRM (cliente/empresa/lead/estado). |
| `frontend/app/(app)/projects/page.tsx` | 90 | **Reescribir** | Alta | Rehacer dentro del CRM. Usa `alert()` para errores (descartar). |
| `frontend/app/(app)/editor/[id]/page.tsx` | — | **Reescribir** | Media | Orquestación del editor. Rehacer sobre nuevo modelo de datos. |
| `frontend/app/(auth)/login/page.tsx` | 74 | **Descartar** | Alta | Login contra JWT propio. Sustituir por Better Auth. |
| `frontend/app/share/[token]/page.tsx` | — | **Reescribir** | Media | Vista pública compartida. Rehacer con seguridad. |
| `frontend/app/layout.tsx` | 40 | **Portar** | Alta | Layout base + fuentes. Adaptar marca. |

### Backend (FastAPI)

| Archivo | Acción | Prioridad | Justificación |
|---|---|---|---|
| `backend/` (todo) | **Referencia / Archivar** | Baja | Decisión cerrada (sección 11.8): **no hay FastAPI en el MVP**. La lógica va en Next.js full-stack. Se conserva como referencia de reglas de negocio. |
| `backend/app/api/routes/projects.py` | **Referencia** | Alta (lógica) | Contiene el principio clave: **recálculo de totales en servidor** (subtotal por `base_price_cents * qty`, IVA `TAX_RATE`). Reimplementar este principio en el nuevo backend. |
| `backend/app/core/security.py` | **Descartar** | Alta | JWT + bcrypt manual. Better Auth lo cubre. |
| `backend/app/core/config.py` | **Referencia** | Baja | Buen patrón de validación de `DATABASE_URL`. Referencia para config Neon. |
| `backend/app/models/*.py` | **Referencia** | Media | Modelos UUID correctos (mejor que el frontend). Referencia para esquema Drizzle. |

---

## 4. Problemas detectados confirmados (a NO heredar)

1. **Contrato frontend ≠ backend**: `Project.id` es `number` en `types.ts` pero `UUID` en el modelo; `owner_id` (front) vs `user_id` (back). El route usa `Project.user_id`. → Fuente de tipos única (Drizzle + Zod).
2. **Campos legacy y `any`**: `CatalogItem` mezcla `price`/`base_price_cents`, `width`/`width_cm`, y `CanvasData`/`CanvasItem` usan `[key: string]: any`. `item.qty` se usa en el recálculo backend pero no está tipado en el front. → Esquema estricto sin comodines.
3. **Auth insegura**: token en `localStorage`, `Authorization: Bearer` manual, redirección dura a `/login`. → Better Auth con cookies httpOnly/secure/sameSite + sesión servidor.
4. **Errores con `alert()`** y `console.error`. → Toasts accesibles + estados recuperables + IDs de error.
5. **Landing monolítica** de 880 líneas. → Componentes + secciones + rutas.
6. **Datos de demo mezclados** (seeds en `init_db.py`). → No migrar demo a producción.

---

## 5. Principios a conservar (concepto, no código)

- **El cliente nunca es la fuente de verdad de precios/impuestos/totales** → cálculo siempre en servidor.
- **Konva dynamic-load** obligatorio en Next.js (accede a `window`).
- **Grid snapping** y modelo de unidades físicas (cm) en el editor.
- **Cookies Rodorte** ya conformes → reutilizar el banner y la página.

---

## 6. Orden de portado recomendado (alineado con Fases)

1. **Fase 1** — Base técnica nueva (repo, Next.js, Neon, Drizzle, Better Auth). Sin tocar editor.
2. **Fase 2** — Web pública: portar tokens visuales + trocear landing en secciones.
3. **Entrega A/B** — CRM + catálogo + proyectos (reescritos sobre modelo nuevo).
4. **Entrega C** — Editor Konva (portar `CanvasStage`/`Inspector`/`CatalogSidebar` sobre datos ya estables).
5. **Entrega D** — Ecommerce (no antes de logística confirmada).

---

## 7. Pendiente de confirmar (bloqueadores)

- Licencias de **Clash Display** y **Bauhaus** para uso en producción.
- Recursos visuales (vídeos `public/videos`, imágenes `public/imgs/proceso`) → confirmar derechos antes de portar.
- Resto de bloqueadores en sección 18.2 del máster (dominio, accesos, responsable de leads).
