import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './auth';
import { activityTypeEnum, taskStatusEnum } from './enums';

/**
 * Tareas internas y registro de actividad (máster sección 10).
 * `entityType` + `entityId` permiten asociar tareas/actividades a cualquier
 * dominio (lead, company, contact, planning_request...) sin acoplar tablas.
 */

export const task = pgTable('task', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  status: taskStatusEnum('status').default('pendiente').notNull(),
  assigneeId: text('assignee_id').references(() => user.id, { onDelete: 'set null' }),
  createdById: text('created_by_id').references(() => user.id, { onDelete: 'set null' }),
  // Asociación polimórfica controlada por el servicio
  entityType: text('entity_type'), // 'lead' | 'company' | 'contact' | ...
  entityId: uuid('entity_id'),
  dueAt: timestamp('due_at', { withTimezone: true }),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const activity = pgTable('activity', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: activityTypeEnum('type').notNull(),
  entityType: text('entity_type').notNull(),
  entityId: uuid('entity_id').notNull(),
  authorId: text('author_id').references(() => user.id, { onDelete: 'set null' }),
  body: text('body'),
  meta: jsonb('meta'), // datos adicionales (p.ej. estado anterior/nuevo)
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
