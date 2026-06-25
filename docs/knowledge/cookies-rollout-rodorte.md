# Rodorte Cookie Rollout Skill (operativa)

## Objetivo
Aplicar un sistema estandar de cookies en cualquier proyecto Rodorte con el mismo flujo:
1. Banner de consentimiento (aceptar/rechazar)
2. Ruta/pagina de politica
3. Enlace de preferencias para reabrir banner
4. Auth segura por cookies cuando aplique

## Modo Next.js
- Crear util de consentimiento (localStorage key fija por proyecto)
- Crear componente de banner global
- Montar en layout principal
- Crear ruta `/cookies`
- Incluir enlace en footer

Referencia implementada en este workspace:
- frontend/COOKIE_TEMPLATE_RODORTE.md

## Modo WordPress Theme
- Insertar markup del banner en footer global
- Implementar logica de consentimiento en JS del theme
- Anadir estilos del banner en CSS del theme
- Publicar ruta `/cookies` (pagina o rewrite)
- Añadir enlace "Preferencias" en footer

## Convenciones Rodorte
- Consent key: `rodorte-cookie-consent`
- Ruta legal: `/cookies`
- Botones: `Aceptar`, `Rechazar`, `Preferencias`

## Checklist por proyecto
- [ ] Banner visible en primera visita
- [ ] Aceptar guarda estado y oculta
- [ ] Rechazar guarda estado y oculta
- [ ] Preferencias reabre banner
- [ ] `/cookies` responde 200
- [ ] Footer con enlace a privacidad y cookies

## Despliegue
1. Subir cambios
2. Limpiar cache (si hay CDN/cache plugin)
3. Validar en incognito:
   - Home
   - Footer links
   - `/cookies`
   - Persistencia de decision

## Hardening auth (si usa NextAuth)
- `secret: AUTH_SECRET ?? NEXTAUTH_SECRET`
- `trustHost: true`
- Validar cookies en preview y prod
