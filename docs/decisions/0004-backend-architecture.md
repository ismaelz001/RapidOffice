# 0004 — Arquitectura backend: Next.js server-side + Supabase, sin FastAPI

## Estado

Aceptada.

## Decisión

El proyecto Ofiponiente Digital **no usará un backend FastAPI propio** en el MVP ni en las fases comerciales previstas.

La lógica de datos del MVP se gestiona desde Next.js. Las lecturas y escrituras sensibles se ejecutan en servidor contra Supabase Postgres mediante `postgres` y `DATABASE_URL`.

No se exponen credenciales de base de datos al navegador. Las API Routes de Next.js validan los datos del cliente y ejecutan las operaciones comerciales.

El backend FastAPI original ha sido archivado en `docs/archive/legacy-backend/`.

## Contexto

El proyecto arrancó con un prototipo FastAPI + SQLAlchemy + Neon pensado para un MVP de catálogo/presupuestos. Durante la Fase 0 se confirmó que:

- La base de datos es Supabase (ver 0001).
- El stack frontend es Next.js App Router con TypeScript.
- No hay equipo backend dedicado.
- Las operaciones necesarias (leer catálogo, insertar leads, consultar presupuestos) no justifican un servidor intermedio.

## Consecuencias

- No se usará FastAPI, SQLAlchemy, Neon, JWT propio ni bcrypt en este proyecto.
- La autenticación de panel interno se gestionará con Supabase Auth si fuera necesaria.
- Las API Routes de Next.js (`app/api/`) se usarán para escrituras sensibles, webhooks, emails y otras operaciones exclusivamente de servidor.
- `DATABASE_URL` y `DATABASE_URL_DIRECT` son variables exclusivamente de servidor.
- El archivo `render.yaml` del backend legacy queda eliminado.
- Si en el futuro se necesita lógica de servidor compleja, se evaluará en ese momento con nueva decisión documentada.

## Archivos afectados

- `docs/archive/legacy-backend/backend/` — código archivado, solo referencia.
- `frontend/.env.local` — conservar `DATABASE_URL` solo en servidor; nunca usar prefijo `NEXT_PUBLIC_`.
- `SECRET_KEY`, `ALGORITHM` y `NEXT_PUBLIC_API_BASE_URL` pertenecían al backend legacy y no forman parte de la arquitectura activa.
