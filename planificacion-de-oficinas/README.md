# Planificación de Oficinas by Ofiponiente

Plataforma integral de planificación, catálogo, CRM y presupuestos para Ofiponiente.

- **Demo / staging:** `ofiponiente.rodorte.com`
- **Dominio comercial:** `planificaciondeoficinas.com` *(propiedad a confirmar con el cliente)*

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) · TypeScript estricto |
| Base de datos | PostgreSQL (Supabase) · Drizzle ORM |
| Auth | Better Auth (cookies httpOnly, roles, sin JWT en localStorage) |
| Validación | Zod |
| Formularios complejos | React Hook Form |
| Estilos | Tailwind CSS · tokens marca `ofi.*` |
| Tests unitarios | Vitest |
| Tests E2E | Playwright |
| Despliegue | Vercel |

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar y configurar entorno
cp .env.example .env.local
# → editar DATABASE_URL y BETTER_AUTH_SECRET

# 3. Generar y aplicar migraciones (necesita DATABASE_URL_DIRECT o DATABASE_URL)
npm run db:generate
npm run db:migrate

# 4. Arrancar
npm run dev
```

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run typecheck` | TypeScript sin emitir |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm test` | Vitest (unitarios) |
| `npm run test:e2e` | Playwright |
| `npm run db:generate` | Generar migración Drizzle |
| `npm run db:migrate` | Aplicar migraciones |
| `npm run db:studio` | Drizzle Studio |

---

## Estructura principal

```
src/
├── app/           — App Router (rutas públicas, admin, API)
├── components/    — Componentes UI (public / admin / editor / ui)
├── features/      — Lógica de dominio (leads, customers, projects…)
├── server/        — Solo servidor: db, auth, services, permissions
├── lib/           — Utilidades compartidas (env, money, auth-client)
├── styles/        — CSS global
└── tests/         — Setup y helpers de pruebas
```

---

## Entornos

| Entorno | Base de datos | Indexable | URL |
|---|---|---|---|
| development | local / Supabase dev | No | localhost:3000 |
| staging | Supabase staging | No | ofiponiente.rodorte.com |
| production | Supabase prod | Sí | planificaciondeoficinas.com |

### Vercel Production

Estas variables deben existir con valor real, no `""`:

```bash
APP_ENV=production
DATABASE_URL=postgresql://...pooler.supabase.com:6543/postgres
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=https://<dominio-produccion>
NEXT_PUBLIC_APP_URL=https://<dominio-produccion>
```

`DATABASE_URL_DIRECT` solo es necesaria donde se ejecuten migraciones Drizzle. En Supabase debe ser la conexión directa `db.<ref>.supabase.co:5432`, no la pooled de runtime.

---

## Roles

`admin` · `comercial` · `catalogo` · `operaciones` · `direccion` · `lectura`

El registro público está **deshabilitado**. Los usuarios se crean por invitación.

---

## Documento de referencia

`f:\rapidOffice\.agents\PLANIFICACION_DE_OFICINAS_MASTER(15).md` — máster del proyecto (21 secciones).
