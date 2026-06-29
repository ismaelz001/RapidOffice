# Ofiponiente Digital — Status & Roadmap

**¿Dónde estamos?** Fase 1 ✅ completada. Fase 2 tiene la implementación completa y está pendiente únicamente de validación final en producción.

**¿Qué sigue?** Validar el despliegue y abrir Fase 3: CRM interno real sobre los leads capturados.

**Aparcado explícitamente:** `planificaciondeoficinas.com`. El PO avisará cuándo el dominio esté listo. Hasta entonces no se configura dominio, deploy ni proyecto separado.

---

## 📊 Progreso rápido

| Fase | Estado | Descripción | Timeline |
|------|--------|-------------|----------|
| **1** | ✅ DONE | Limpieza arquitectónica, archivar legacy backend/prototipo local | Completado |
| **2** | 🔄 95% | Lead capture y trazabilidad comercial | Validación final |
| **3** | ⏳ PLAN | CRM interno (dashboard de leads, seguimiento) | 1 sprint |
| **4** | ⏳ PLAN | Páginas de productos individuales | 1-2 sprints |
| **5** | ⏳ PLAN | Páginas de categorías mejoradas | 1 sprint |
| **6** | ⏳ PLAN | Blog + SEO de contenido | 2-3 sprints |
| **7** | ⏳ PLAN | Optimización Core Web Vitals + velocidad | 1 sprint |
| **8** | ⏳ PLAN | Email automation + seguimiento | 1 sprint |
| **9** | ⏳ PLAN | Analytics avanzado + reportes KPI | 1-2 sprints |

**MVP comercial inicial:** ~75%. La captación y trazabilidad existen; el siguiente bloque es el CRM interno.

---

## 🔍 Cómo leer esto

1. **Para visión general:** Lee este archivo
2. **Para detalles completos:** [docs/ROADMAP.md](docs/ROADMAP.md) — tareas específicas, archivos a modificar, validación
3. **Para arquitectura:** [docs/decisions/](docs/decisions/) — ADRs 0001-0005
4. **Para contexto:** [docs/master/ofiponiente-digital-master.md](docs/master/ofiponiente-digital-master.md)

---

## ✅ Fase 1 — Completada (commit `22df524`)

```
✅ Backend FastAPI → docs/archive/legacy-backend/
✅ Prototipo local planificacion-de-oficinas → docs/archive/planificacion-de-oficinas/
⏸️ Dominio planificaciondeoficinas.com → aparcado hasta aviso del PO
⚠️ ADR 0004: requiere alinear la redacción con el acceso actual mediante `postgres` + `DATABASE_URL`
✅ ADR 0005: planificaciondeoficinas.com como dominio futuro aparcado
✅ 8/8 agents auditados (sin refs FastAPI/Neon)
✅ docs/ auditado (refs legacy solo en archivos históricos)
✅ Git commit + push
```

---

## 🔄 Fase 2 — Implementación completa (95%, pendiente E2E)

**Spec operativa:** [docs/specs/phase-2-lead-capture/](docs/specs/phase-2-lead-capture/)

**Qué hacer:**
- [x] Conectar home CTA → form → `quote_requests` Supabase
- [x] Conectar categorías → "Solicitar presupuesto" → `quote_requests`
- [x] Conectar catálogo/reacondicionado con contexto real de producto y origen correcto
- [x] Guardar planner state → `quote_requests` como resumen comercial
- [x] Guardar productos concretos → `quote_request_items` resolviendo SKU en servidor
- [x] Source tracking (home / categoría / planner)
- [x] Dejar preparada la integración de email; activación, dominio y remitentes quedan pendientes del setup del PO
- [x] UX de éxito inline con número de solicitud
- [ ] Validar error y responsive móvil en navegador
- [x] Retirar de producción CRM demo, credenciales públicas, contacto ficticio y enlaces legales vacíos

**Qué NO se hace en Fase 2:**
- No configurar `planificaciondeoficinas.com`.
- No crear proyecto/deploy separado para planificación.
- No rediseñar completo el planner.
- No construir CRM completo todavía.

**Dónde tocar:**
- `frontend/app/page.tsx` — home form
- `frontend/app/mobiliario/page.tsx` — reacondicionado form
- `frontend/app/mobiliario/[category]/page.tsx` — category form
- `frontend/public/planifica-tu-espacio/index.html` — planner actual estático

**Validación:**
- [x] Home, categoría y planner probados en producción
- [x] Datos confirmados en Supabase y registros TEST eliminados
- [x] Tests y TypeScript validados en el último cierre técnico
- [ ] Navegador sin errores de consola (`/favicon.ico` devuelve 404 actualmente)
- [ ] Email preparado en código; envío real se validará cuando el PO configure proveedor, dominio y cuentas

**Riesgos P0 resueltos en el cierre:**
- Rutas legacy redirigidas y credenciales demo retiradas.
- Contacto ficticio y enlaces vacíos retirados.
- CTA de producto conserva SKU y cantidad; la API crea `quote_request_items` de forma transaccional.
- Email preparado y desactivado de forma segura mientras falte configuración corporativa.

---

## 📋 Referencias rápidas

**Documentación:**
- Master: [docs/master/ofiponiente-digital-master.md](docs/master/ofiponiente-digital-master.md)
- Decisions: [docs/decisions/](docs/decisions/) (ADRs 0001-0005)
- Standards: [docs/standards/](docs/standards/) (Product, Category, Blog, Ecommerce)
- Roadmap detallado: [docs/ROADMAP.md](docs/ROADMAP.md)

**Agentes especializados:**
- CEO: Decisiones estratégicas
- Fullstack: Arquitectura + código
- Sales: Leads + CRM
- Ecommerce: Flujo comercial
- SEO: Posicionamiento
- (y 3 más en [.agents/](.agents/))

**Supabase:**
- Tablas: `quote_requests`, `quote_request_items`, `catalog_products`, `catalog_categories`
- Migrations: [supabase/migrations/](supabase/migrations/)

---

**Última actualización:** 2026-06-29 (auditoría de estado real)
**Próximo checkpoint:** Validación E2E del despliegue y apertura de Fase 3
