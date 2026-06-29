# Ofiponiente Digital — Frontend

Aplicación principal en Next.js para la web pública, catálogo, planner y captación de solicitudes.

## Desarrollo local

1. Copiar `.env.example` a `.env.local`.
2. Configurar `DATABASE_URL` y `DATABASE_URL_DIRECT` con el proyecto Supabase.
3. Ejecutar `npm install` y `npm run dev`.

Las variables de email pueden permanecer vacías. El sistema registra las solicitudes igualmente y omite el envío hasta que el PO configure Resend, el dominio y las cuentas corporativas.

## Arquitectura activa

- Next.js App Router.
- Supabase Postgres.
- Acceso a datos exclusivamente desde servidor mediante `DATABASE_URL`.
- `POST /api/quote-requests` para captación de leads.
- Vercel como plataforma de despliegue.

No se utiliza el backend FastAPI ni `NEXT_PUBLIC_API_BASE_URL`.

## Validación

```bash
node --test tests/catalog.test.mjs tests/landing-nav.test.mjs tests/quote-requests.test.mjs tests/production-hardening.test.mjs
npx tsc --noEmit
```

El build local sobre el volumen Windows `F:` puede fallar por un problema conocido de `fs.readlink`; el build remoto de Vercel es la puerta de despliegue autoritativa.
