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

- [x] Mantener un único formulario reutilizable y enlazar desde cada producto con su SKU.
- [x] Guardar producto y cantidad en `quote_request_items`.
- [x] Para productos reacondicionados, usar `source = refurbished`.

## 2.6 Planner

- [x] Localizar CTA final actual del HTML.
- [x] Leer estado actual del planner y mantener guardado `ofi_config` en `localStorage`.
- [x] Enviar resumen a `/api/quote-requests`.
- [x] Usar `source = planner`.
- [x] Confirmar sin cambiar diseño.

## 2.7 Tests y validación

- [x] Añadir test estático para endpoint/form si encaja con patrón actual.
- [x] Ejecutar tests existentes.
- [x] Ejecutar TypeScript.
- [x] Probar en navegador.
- [x] Revisar filas en Supabase.

## 2.8 Roadmap

- [x] Actualizar `ROADMAP.md`.
- [x] Actualizar `docs/ROADMAP.md`.
- [x] Marcar solo lo realmente terminado.

## 2.9 Hardening y correo preparado

- [x] Retirar credenciales y dashboard demo del frontend público.
- [x] Redirigir rutas legacy hasta construir el CRM real.
- [x] Retirar datos de contacto ficticios y enlaces legales vacíos.
- [x] Añadir icono de aplicación.
- [x] Preparar Resend con variables de entorno, sin activarlo hasta el setup del PO.
- [x] Actualizar ADR 0004 con el acceso real a Supabase.
