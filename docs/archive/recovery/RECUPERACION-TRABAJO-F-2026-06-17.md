# Recuperacion de trabajo en disco F (2026-06-17)

## Ventana analizada
- Desde 2026-05-01
- Repos escaneados: repos principales en F

## Hallazgo clave
- En RapidOffice no hay commits de cookies/auth en ese periodo.
- Si recuerdas cookies "de dos proyectos", aparecen en:
  - COCHES (NextAuth config)
  - RATIO-GAME (cookie consent + privacy)
- Tambien hay cambios de auth en InmoStack (activar/desactivar guards y middleware).

## Commits de cookies/auth recuperados

### COCHES
- 6c81983 (2026-05-27) auth: explicit secret from NEXTAUTH_SECRET or AUTH_SECRET
- da40195 (2026-05-27) auth: add trustHost for Vercel + NextAuth v5
- 286a8f0 (2026-05-27) chore: trigger redeploy for NEXTAUTH_SECRET

Archivos tocados en estos commits:
- auth: 1 archivo central de autenticacion (lib auth)
- redeploy: sin cambios de codigo

### RATIO-GAME
- 78f082d (2026-06-11) Add cookie consent and privacy page

Archivos tocados:
- pagina de cookies
- home
- componente de cookie consent
- footer

### InmoStack (auth relacionado)
- d55ab96 (2026-05-21) re-enable auth
- b846cfc (2026-05-21) remove auth redirect in layout
- 4428d6d (2026-05-21) temp: disable auth guards for testing

## Actividad global recuperada por repo (desde 2026-05-01)
- RapidOffice: 2 commits (landing/UI)
- InmoStack: 52 commits
- COCHES: 62 commits
- RATIO-GAME: 9 commits

## Actividad reciente (desde 2026-05-27)
- COCHES: 16 commits
- gtaJuegoDEMO: 20 commits
- RATIO-GAME: 1 commit
- RapidOffice: 0 commits en ese rango

## Notas tecnicas
- Algunos repos antiguos en F:\antiguo devolvieron "dubious ownership".
- Un repo devolvio error de indice pack no monotonic.
- Eso no afecta a los hallazgos principales arriba.

## Comandos utiles para recuperar trabajo en otra rama

Ver un commit completo:
- git -C "F:\COCHES" show 6c81983
- git -C "F:\RATIO-GAME\ratio-game" show 78f082d

Aplicar commits concretos en otra rama/repo (si procede):
- git cherry-pick 6c81983 da40195
- git cherry-pick 78f082d

Buscar historico auth/cookies por mensaje:
- git log --all --since=2026-05-01 --pretty=format:"%h | %ad | %s" --date=short | findstr /i "cookie cookies nextauth auth session jwt httponly samesite secure"
