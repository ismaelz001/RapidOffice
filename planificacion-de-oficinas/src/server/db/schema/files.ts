import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './auth';

/**
 * Metadatos de archivos (máster 12.13).
 * Los binarios viven FUERA de PostgreSQL (almacenamiento privado de objetos).
 * Aquí solo metadatos; la descarga se autoriza en servidor.
 */
export const fileObject = pgTable('file_object', {
  id: uuid('id').primaryKey().defaultRandom(),
  // Nombre interno aleatorio en el bucket (no el nombre original)
  storageKey: text('storage_key').notNull().unique(),
  originalName: text('original_name').notNull(),
  mimeType: text('mime_type').notNull(),
  sizeBytes: integer('size_bytes').notNull(),
  uploadedById: text('uploaded_by_id').references(() => user.id, { onDelete: 'set null' }),
  // Asociación polimórfica controlada por el servicio
  entityType: text('entity_type'),
  entityId: uuid('entity_id'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
