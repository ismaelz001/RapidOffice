---
name: cookies-rollout-rodorte
description: Aplica el estandar Rodorte de cookies (banner, politica, preferencias y hardening auth) en proyectos Next.js o WordPress.
---

# cookies-rollout-rodorte

## Cuando usar
- El usuario pide "meter cookies" en un proyecto.
- Necesitas estandarizar consentimiento y pagina legal.
- Quieres reutilizar la misma implementacion en varios repos.

## Resultado esperado
1. Banner de consentimiento funcional.
2. Pagina/route de politica de cookies.
3. Enlace para reabrir preferencias.
4. Checklist de validacion y despliegue.

## Flujo Next.js
1. Crear util de consentimiento con key fija.
2. Crear componente de banner.
3. Montar en layout global.
4. Crear route `/cookies`.
5. Añadir enlace a cookies y privacidad en footer.

## Flujo WordPress Theme
1. Incluir banner en footer global.
2. Añadir logica JS (accept/reject/open preferences).
3. Añadir estilos CSS del banner.
4. Exponer ruta `/cookies` (page o rewrite).
5. Añadir enlaces legales en footer.

## Convencion Rodorte
- Consent key: `rodorte-cookie-consent`
- Ruta: `/cookies`
- Acciones: `Aceptar`, `Rechazar`, `Preferencias`

## Validacion minima
- Primera visita muestra banner.
- Eleccion persiste en navegador.
- Preferencias permite reabrir banner.
- `/cookies` responde correctamente.
