import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './auth';

/**
 * Auditoría de operaciones sensibles (máster 12.9 / 12.19).
 * NO se registran contraseñas, tokens ni datos fiscales completos.
 */
export const auditEvent = pgTable('audit_event', {
  id: uuid('id').primaryKey().defaultRandom(),
  // Identificador de solicitud para correlación con logs (12.19)
  requestId: text('request_id'),
  actorId: text('actor_id').references(() => user.id, { onDelete: 'set null' }),
  action: text('action').notNull(), // p.ej. 'lead.status_changed'
  entityType: text('entity_type'),
  entityId: uuid('entity_id'),
  // Cambios no sensibles (antes/después). El servicio filtra campos sensibles.
  changes: jsonb('changes'),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
