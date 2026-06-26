# Ofiponiente Digital — Status & Roadmap

**¿Dónde estamos?** Fase 1 ✅ completada. Arquitectura limpia, decidida y documentada.

**¿Qué sigue?** Fase 2 → captación real de leads (formularios → Supabase).

**Aparcado explícitamente:** `planificaciondeoficinas.com`. El PO avisará cuándo el dominio esté listo. Hasta entonces no se configura dominio, deploy ni proyecto separado.

---

## 📊 Progreso rápido

| Fase | Estado | Descripción | Timeline |
|------|--------|-------------|----------|
| **1** | ✅ DONE | Limpieza arquitectónica, archivar legacy backend/prototipo local | Completado |
| **2** | 🔄 IN PROGRESS | Lead capture (formularios → Supabase quote_requests) | 1-2 sprints |
| **3** | ⏳ PLAN | CRM interno (dashboard de leads, seguimiento) | 1 sprint |
| **4** | ⏳ PLAN | Páginas de productos individuales | 1-2 sprints |
| **5** | ⏳ PLAN | Páginas de categorías mejoradas | 1 sprint |
| **6** | ⏳ PLAN | Blog + SEO de contenido | 2-3 sprints |
| **7** | ⏳ PLAN | Optimización Core Web Vitals + velocidad | 1 sprint |
| **8** | ⏳ PLAN | Email automation + seguimiento | 1 sprint |
| **9** | ⏳ PLAN | Analytics avanzado + reportes KPI | 1-2 sprints |

**MVP: 60% → 70% (post-Fase 1)**

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
✅ ADR 0004: Backend Architecture (Supabase client-only)
✅ ADR 0005: planificaciondeoficinas.com como dominio futuro aparcado
✅ 8/8 agents auditados (sin refs FastAPI/Neon)
✅ docs/ auditado (refs legacy solo en archivos históricos)
✅ Git commit + push
```

---

## 🔄 Fase 2 — Por empezar

**Spec operativa:** [docs/specs/phase-2-lead-capture/](docs/specs/phase-2-lead-capture/)

**Qué hacer:**
- [x] Conectar home CTA → form → `quote_requests` Supabase
- [x] Conectar categorías → "Solicitar presupuesto" → `quote_requests`
- [ ] Conectar catálogo/reacondicionado global → "Solicitar presupuesto" → `quote_requests` si hace falta
- [ ] Guardar planner state → `quote_request_items`
- [ ] Source tracking (home / catálogo / planner)
- [ ] Email de confirmación automático
- [ ] UX de éxito (toast + número de solicitud)

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
- 3 formularios probados en dev
- Datos llegan a Supabase
- Email de confirmación funciona

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

**Última actualización:** 2026-06-25 (post-Fase-1)
**Próximo checkpoint:** Después de Fase 2
