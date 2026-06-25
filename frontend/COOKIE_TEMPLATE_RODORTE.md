# Plantilla fija Rodorte: cookies para cualquier proyecto

## Objetivo
Implementacion base reusable con:
- Banner de consentimiento (aceptar/rechazar)
- Ruta de politica de cookies
- Persistencia de la eleccion
- Configuracion segura para auth por cookies en proyectos NextAuth

## Bloque 1: Consentimiento (frontend)
1. Crea `lib/cookie-consent.ts` con una key fija por proyecto.
2. Crea `components/CookieConsentBanner.tsx`.
3. Inserta el banner en el `layout.tsx` global.
4. Crea `app/cookies/page.tsx` con politica.
5. Incluye enlace a `/cookies` en footer o banner.

Checklist:
- [ ] Primera visita muestra banner
- [ ] Aceptar oculta banner y persiste
- [ ] Rechazar oculta banner y persiste
- [ ] Politica accesible en `/cookies`

## Bloque 2: Auth por cookies (NextAuth)
Referencia tomada de GarantyCars.

```ts
export const authOptions = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  trustHost: true,
  session: { strategy: 'jwt' },
};
```

Checklist:
- [ ] `AUTH_SECRET` configurado en entorno
- [ ] `NEXTAUTH_SECRET` como fallback
- [ ] `trustHost: true` para Vercel/proxy
- [ ] Validado login en preview y produccion

## Bloque 3: Auth cookie custom (FastAPI + Next)
Si no usas NextAuth:
- Backend emite cookie `HttpOnly`, `Secure`, `SameSite=Lax`.
- Frontend usa `credentials: 'include'`.
- Logout limpia cookie en backend.

Checklist:
- [ ] `Set-Cookie` en login
- [ ] `Set-Cookie` expiracion en logout
- [ ] CORS permite credenciales
- [ ] Front sin token en localStorage

## Convencion Rodorte recomendada
- Key consentimiento: `rodorte-cookie-consent`
- Ruta legal: `/cookies`
- Texto legal base: cookies tecnicas + preferencia + sin terceros por defecto
