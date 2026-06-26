# Checklist — Fase 2 Lead Capture

## Antes de tocar código

- [x] Revisar `ROADMAP.md`.
- [x] Revisar `docs/ROADMAP.md`.
- [x] Confirmar Fase 1 completada.
- [x] Confirmar que `planificaciondeoficinas.com` está aparcado.
- [x] Confirmar tablas Supabase existentes.
- [x] Confirmar formularios actuales sin persistencia.

## Persistencia

- [x] No borrar columnas.
- [x] No renombrar columnas.
- [x] No cambiar tipos existentes.
- [x] Usar consultas parametrizadas.
- [x] Validar inputs en servidor.
- [x] Guardar `source`.
- [x] Guardar contexto suficiente en `message`.

## UX

- [ ] No mostrar precios falsos en pasos tempranos del planner.
- [ ] Mantener CTA claro.
- [ ] Mostrar éxito.
- [ ] Mostrar error entendible.
- [ ] No perder los datos del formulario si falla.
- [ ] Revisar móvil.

## Seguridad

- [x] No exponer `DATABASE_URL`.
- [x] No exponer stack traces.
- [x] No aceptar payloads sin límite razonable.
- [x] No confiar en campos enviados por cliente.

## Validación

- [x] `node --test tests/catalog.test.mjs tests/landing-nav.test.mjs`
- [x] `npx tsc --noEmit`
- [ ] Home probado.
- [ ] Categoría probada.
- [ ] Planner probado.
- [ ] Supabase revisado.

## Cierre

- [ ] Roadmap actualizado.
- [ ] Commit con alcance claro.
- [ ] Push a `main`.
