import { pgEnum } from 'drizzle-orm/pg-core';

/**
 * Roles del sistema (máster 12.8).
 * La autorización SIEMPRE se comprueba en servidor.
 */
export const roleEnum = pgEnum('role', [
  'admin',
  'comercial',
  'catalogo',
  'operaciones',
  'direccion',
  'lectura',
]);

/**
 * Estados del pipeline de leads (mini CRM — sección 10).
 * Valores provisionales; el pipeline real se confirma con el cliente (18.7).
 */
export const leadStatusEnum = pgEnum('lead_status', [
  'nuevo',
  'contactado',
  'cualificado',
  'propuesta',
  'ganado',
  'perdido',
  'descartado',
]);

/** Origen del lead (atribución — sección 14.17). */
export const leadSourceEnum = pgEnum('lead_source', [
  'planificador',
  'formulario_contacto',
  'telefono',
  'email',
  'redes',
  'google_ads',
  'meta_ads',
  'referido',
  'otro',
]);

/** Estado de una solicitud del planificador. */
export const planningStatusEnum = pgEnum('planning_status', [
  'pendiente',
  'en_revision',
  'convertida',
  'descartada',
]);

/** Estado de tareas internas. */
export const taskStatusEnum = pgEnum('task_status', [
  'pendiente',
  'en_curso',
  'completada',
  'cancelada',
]);

/** Tipo de actividad registrada en una entidad. */
export const activityTypeEnum = pgEnum('activity_type', [
  'nota',
  'llamada',
  'email',
  'reunion',
  'cambio_estado',
  'tarea',
  'sistema',
]);
