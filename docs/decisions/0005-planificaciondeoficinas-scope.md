# 0005 — Scope de planificacion-de-oficinas: archivado, no integrar

## Estado

Aceptada.

## Decisión

El directorio `planificacion-de-oficinas/` ha sido **archivado** y no se integrará como submódulo ni proyecto paralelo.

Su único fichero de valor (`configurador-preview.html`) se conserva en `docs/archive/planificacion-de-oficinas/` como referencia de diseño.

## Contexto

`planificacion-de-oficinas/` era un prototipo paralelo creado para explorar el configurador/planner de espacios. Contenía:

- Un proyecto Next.js independiente con su propio `node_modules` y `.vercel`.
- Un único fichero útil: `configurador-preview.html` (preview visual del cuestionario).
- Sin código de producción relevante no ya presente en el frontend principal.

Mantenerlo activo suponía:
- Confusión sobre cuál es el proyecto real.
- Doble gestión de dependencias.
- Contradicción con la arquitectura documentada (un único Next.js en `frontend/`).

## Decisión técnica: el planner va en `frontend/`

El planificador de espacios se construirá como ruta dentro del proyecto Next.js principal:
- Ruta: `/planifica-tu-espacio` (ya existe como landing estática).
- Cuestionario guiado: componentes React en `frontend/app/(public)/planifica-tu-espacio/`.
- Persistencia: Supabase tabla `quote_requests` + `quote_request_items` (ya existen).
- No habrá proyecto separado, ni deploy separado para el planner.

## Consecuencias

- `planificacion-de-oficinas/` eliminado del árbol de trabajo.
- El preview HTML archivado es solo referencia visual, no fuente de verdad.
- Todo trabajo del planner ocurre en `frontend/` bajo los standards documentados.
