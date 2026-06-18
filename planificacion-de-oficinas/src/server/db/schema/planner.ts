import { integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './auth';
import { lead } from './crm';
import { planningStatusEnum } from './enums';

/**
 * Solicitudes del planificador (máster sección 7).
 * El planificador público crea una PlanningRequest; al cualificar se convierte en Lead.
 */
export const planningRequest = pgTable('planning_request', {
  id: uuid('id').primaryKey().defaultRandom(),
  reference: text('reference').notNull().unique(), // PLAN-2026-000045
  status: planningStatusEnum('status').default('pendiente').notNull(),
  // Datos del formulario multistep (estructura validada con Zod en la capa de servicio)
  answers: jsonb('answers').notNull(),
  // Datos de contacto capturados
  contactName: text('contact_name'),
  contactEmail: text('contact_email'),
  contactPhone: text('contact_phone'),
  companyName: text('company_name'),
  zone: text('zone'),
  seats: integer('seats'),
  budgetCents: integer('budget_cents'),
  // Relación con lead una vez convertida
  leadId: uuid('lead_id').references(() => lead.id, { onDelete: 'set null' }),
  reviewedBy: text('reviewed_by').references(() => user.id, { onDelete: 'set null' }),
  // Atribución
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
