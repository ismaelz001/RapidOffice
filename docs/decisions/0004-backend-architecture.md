# 0004 — Arquitectura backend: Supabase client-only, sin FastAPI

## Estado

Aceptada.

## Decisión

El proyecto Ofiponiente Digital **no usará un backend FastAPI propio** en el MVP ni en las fases comerciales previstas.

Toda la lógica de datos se gestiona directamente desde Next.js mediante el cliente oficial de Supabase (`@supabase/supabase-js`).

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
- Las API Routes de Next.js (`app/api/`) se usarán solo para operaciones que no puedan ejecutarse en cliente (webhooks, emails, firmas de URL).
- El archivo `render.yaml` queda obsoleto para el backend; puede eliminarse en una limpieza futura si no se usa para otro servicio.
- Si en el futuro se necesita lógica de servidor compleja, se evaluará en ese momento con nueva decisión documentada.

## Archivos afectados

- `docs/archive/legacy-backend/backend/` — código archivado, solo referencia.
- `.env.local` — eliminar variables `DATABASE_URL`, `SECRET_KEY`, `ALGORITHM` si aún existen.
