# 0001 — Base de datos principal: Supabase

## Estado

Aceptada.

## Decisión

La base de datos principal del proyecto Ofiponiente Digital será Supabase.

## Contexto

Durante el proyecto se aclaró que la base de datos está en Supabase, no en Neon.

## Consecuencias

- Las migraciones deberán mantenerse en `supabase/migrations/`.
- Las integraciones deberán usar las variables de entorno de Supabase configuradas para el proyecto.
- No se debe introducir Neon salvo nueva decisión documentada.

## Regla

Cualquier cambio de proveedor de base de datos requiere una nueva decisión en `docs/decisions/`.
