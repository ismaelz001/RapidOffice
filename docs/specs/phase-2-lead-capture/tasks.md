# Tasks — Fase 2 Lead Capture

## 2.1 Endpoint

- [x] Crear `frontend/app/api/quote-requests/route.ts`.
- [x] Validar JSON de entrada.
- [x] Normalizar `source`.
- [x] Insertar en `quote_requests`.
- [x] Devolver id de solicitud.
- [x] No exponer errores internos al cliente.

## 2.2 Formulario reusable

- [x] Crear `frontend/components/QuoteRequestForm.tsx`.
- [x] Campos mínimos:
  - nombre o empresa
  - email
  - teléfono opcional
  - mensaje
- [x] Estado loading.
- [x] Estado success con número de solicitud.
- [x] Estado error.

## 2.3 Home

- [x] Sustituir formulario pasivo en `frontend/app/page.tsx`.
- [x] Usar `source = home`.
- [x] Mantener estilo visual actual.

## 2.4 Categorías

- [x] Sustituir formulario pasivo en `frontend/app/mobiliario/[category]/page.tsx`.
- [x] Usar `source = category`.
- [x] Incluir categoría en contexto.

## 2.5 Catálogo / reacondicionado

- [ ] Revisar si la página `frontend/app/mobiliario/page.tsx` necesita formulario propio o basta con CTA a categorías.
- [ ] Si se añade, usar `source = catalog`.
- [ ] Para productos reacondicionados, usar `source = refurbished` cuando aplique.

## 2.6 Planner

- [ ] Localizar CTA final actual del HTML.
- [ ] Leer `ofi_config` de `localStorage`.
- [ ] Enviar resumen a `/api/quote-requests`.
- [ ] Usar `source = planner`.
- [ ] Confirmar sin cambiar diseño.

## 2.7 Tests y validación

- [x] Añadir test estático para endpoint/form si encaja con patrón actual.
- [x] Ejecutar tests existentes.
- [x] Ejecutar TypeScript.
- [ ] Probar en navegador.
- [ ] Revisar filas en Supabase.

## 2.8 Roadmap

- [ ] Actualizar `ROADMAP.md`.
- [ ] Actualizar `docs/ROADMAP.md`.
- [ ] Marcar solo lo realmente terminado.
