# Plan de ejecución — Fase 2 Lead Capture

## Resultado deseado

El usuario puede solicitar presupuesto desde home, catálogo/categorías y planner, y Ofiponiente recibe una solicitud trazable en Supabase.

## Restricciones

- No tocar `planificaciondeoficinas.com`.
- No crear backend separado.
- No añadir dependencias sin necesidad.
- No rediseñar pantallas ya validadas.
- No hacer cambios destructivos en Supabase.
- Mantener mobile first y CTA claro.

## Phase 2.1: endpoint de solicitudes

Goal: Tener una única entrada segura para crear `quote_requests`.

Scope:

- Crear ruta server-side en Next.js.
- Validar payload.
- Insertar en `quote_requests`.
- Devolver `{ ok, id }`.

Out of scope:

- Email automático.
- CRM.
- Cambios de esquema.

Implementation:

- `frontend/app/api/quote-requests/route.ts`
- Helper opcional para normalizar input.
- Validación: nombre + email o teléfono.

Validation:

- Test estático o unitario del contrato.
- POST manual contra dev server.
- Verificar fila en Supabase.

Review gate:

- Seguridad: no exponer errores SQL.
- Persistencia: inserción parametrizada, sin migración destructiva.

Acceptance:

- El endpoint responde 201/200 con id cuando el payload es válido.
- Responde 400 si faltan datos mínimos.

Handoff:

- Los formularios solo tendrán que llamar a este endpoint.

## Phase 2.2: formularios React reutilizables

Goal: Conectar home y categorías sin duplicar lógica.

Scope:

- Crear componente cliente reutilizable de formulario.
- Sustituir formulario visual de home conservando estilo.
- Sustituir formulario de categoría conservando estilo.
- Mostrar loading/success/error.

Out of scope:

- Rediseño visual.
- Nuevos campos complejos.

Implementation:

- `frontend/components/QuoteRequestForm.tsx`
- `frontend/app/page.tsx`
- `frontend/app/mobiliario/[category]/page.tsx`

Validation:

- Enviar desde home.
- Enviar desde una categoría.
- Revisar responsive básico.

Review gate:

- UX: confirmación clara y campos mínimos.
- QA: no romper navegación ni CTA actuales.

Acceptance:

- El usuario puede enviar sin recargar la página.
- La solicitud aparece en Supabase con `source`.

Handoff:

- El catálogo principal puede reutilizar el mismo componente si se decide añadir CTA global.

## Phase 2.3: planner actual estático

Goal: Capturar un lead desde `/planifica-tu-espacio` sin rediseñar el HTML.

Scope:

- Leer estado existente de `localStorage` (`ofi_config`).
- Añadir botón o conectar CTA actual de envío si existe.
- Enviar resumen al endpoint.
- Mostrar confirmación.

Out of scope:

- Rediseño de preguntas.
- Lógica avanzada de presupuesto.
- Dominio externo.

Implementation:

- `frontend/public/planifica-tu-espacio/index.html`

Validation:

- Completar flujo mínimo.
- Enviar solicitud.
- Confirmar fila en `quote_requests` con `source = planner`.

Review gate:

- QA: no romper localStorage ni navegación existente.

Acceptance:

- Planner genera lead real.

Handoff:

- Si el planner necesita datos estructurados, crear migración aditiva `metadata jsonb`.

## Phase 2.4: confirmación y seguimiento básico

Goal: Mejorar la confianza tras enviar una solicitud.

Scope:

- Mostrar número de solicitud.
- Mensaje de próximos pasos.
- Preparar texto para email futuro.

Out of scope:

- Integración Resend/SendGrid.
- Automatizaciones comerciales.

Implementation:

- Reutilizar respuesta `{ id }`.
- Copy alineado con Brand Framework.

Validation:

- Confirmación visible en home, categoría y planner.

Review gate:

- UX/Brand: tono asesor, no agresivo.

Acceptance:

- El usuario sabe que Ofiponiente ha recibido la solicitud y qué pasa después.

## Validación general

Comandos:

```bash
cd frontend
node --test tests/catalog.test.mjs tests/landing-nav.test.mjs
npx tsc --noEmit
```

Manual:

- Home → enviar solicitud.
- Categoría → enviar solicitud.
- Planner → enviar solicitud.
- Supabase → revisar filas creadas.

Nota:

- `npm run build` puede fallar localmente en Windows/F: por incidencia conocida del entorno Next; no usar como único bloqueo si `tsc` y tests pasan.

