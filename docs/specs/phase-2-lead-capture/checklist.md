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

- [x] No mostrar precios falsos en pasos tempranos del planner.
- [x] Mantener CTA claro.
- [x] Mostrar éxito.
- [x] Mostrar error entendible en el componente.
- [x] No perder los datos del formulario si falla.
- [x] Revisar móvil en producción (390 × 844 px).

## Seguridad

- [x] No exponer `DATABASE_URL`.
- [x] No exponer stack traces.
- [x] No aceptar payloads sin límite razonable.
- [x] No confiar en campos enviados por cliente.

## Validación

- [x] `node --test tests/catalog.test.mjs tests/landing-nav.test.mjs`
- [x] `npx tsc --noEmit`
- [x] Home probado en producción (2026-06-29).
- [x] Categoría probada en producción (2026-06-29).
- [x] Planner probado.
- [x] Supabase revisado.
- [x] Registros TEST de validación eliminados.
- [x] Consola de navegador sin errores en recorridos normales.
- [x] Producto, cantidad y origen verificados en Supabase.
- [x] Cascada de borrado de datos TEST verificada.

## Cierre

- [x] Roadmap actualizado.
- [x] Commit con alcance claro.
- [x] Push a `main`.
- [x] Build de Vercel `Ready`.
- [x] Fase 2 marcada como completada.
