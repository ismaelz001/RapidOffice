# 0005 — Scope de planificaciondeoficinas.com: dominio futuro, no ejecutar ahora

## Estado

Aceptada.

## Decisión

`planificaciondeoficinas.com` será un dominio futuro para el flujo de planificación cuando el PO confirme que el dominio está listo y haya que activarlo.

Hasta ese momento, **no se trabaja el dominio**, no se configura despliegue específico y no se abre una línea técnica paralela.

El directorio local `planificacion-de-oficinas/` ha sido **archivado** para evitar confusión con el frontend principal.

Su único fichero de valor (`configurador-preview.html`) se conserva en `docs/archive/planificacion-de-oficinas/` como referencia de diseño.

## Contexto

`planificacion-de-oficinas/` era un prototipo paralelo creado para explorar el configurador/planner de espacios. Contenía:

- Un proyecto Next.js independiente con su propio `node_modules` y `.vercel`.
- Un único fichero útil: `configurador-preview.html` (preview visual del cuestionario).
- Sin código de producción relevante no ya presente en el frontend principal.

Mantener el prototipo local activo suponía:
- Confusión sobre cuál es el proyecto real.
- Doble gestión de dependencias.
- Contradicción con la arquitectura documentada (un único Next.js en `frontend/`).

## Decisión técnica actual

De momento:

- El flujo visible sigue en Ofiponiente mediante `/planifica-tu-espacio`.
- El preview actual vive en `frontend/public/planifica-tu-espacio/index.html`.
- El dominio `planificaciondeoficinas.com` queda **fuera del alcance activo** hasta nueva instrucción del PO.
- Cuando el PO confirme el dominio, se decidirá si será dominio alias, landing dedicada, proyecto separado o ruta servida desde el frontend principal.

## Consecuencias

- `planificacion-de-oficinas/` eliminado del árbol de trabajo.
- El preview HTML archivado es solo referencia visual, no fuente de verdad.
- No se debe reabrir trabajo sobre `planificaciondeoficinas.com` hasta que el PO lo solicite explícitamente.
- El roadmap debe marcar este punto como **aparcado**, no como bloqueante.
