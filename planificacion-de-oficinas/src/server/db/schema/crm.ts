import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './auth';
import { leadSourceEnum, leadStatusEnum } from './enums';

/**
 * CRM operativo (máster sección 10).
 * UUID internos; referencias humanas (LEAD-2026-000123) en columnas `reference`.
 * Importes en céntimos enteros (12.11). Timestamps en UTC (12.12).
 */

export const company = pgTable('company', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  taxId: text('tax_id'), // CIF/NIF
  sector: text('sector'),
  website: text('website'),
  phone: text('phone'),
  email: text('email'),
  addressLine: text('address_line'),
  city: text('city'),
  province: text('province'),
  postalCode: text('postal_code'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const contact = pgTable('contact', {
  id: uuid('id').primaryKey().defaultRandom(),
  companyId: uuid('company_id').references(() => company.id, { onDelete: 'set null' }),
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  email: text('email'),
  phone: text('phone'),
  role: text('role'), // cargo en la empresa
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const lead = pgTable('lead', {
  id: uuid('id').primaryKey().defaultRandom(),
  reference: text('reference').notNull().unique(), // LEAD-2026-000123
  status: leadStatusEnum('status').default('nuevo').notNull(),
  source: leadSourceEnum('source').default('otro').notNull(),
  companyId: uuid('company_id').references(() => company.id, { onDelete: 'set null' }),
  contactId: uuid('contact_id').references(() => contact.id, { onDelete: 'set null' }),
  ownerId: text('owner_id').references(() => user.id, { onDelete: 'set null' }), // comercial responsable
  // Datos de cualificación (provisionales hasta confirmar con cliente, 18.6)
  seats: integer('seats'), // nº de puestos estimados
  budgetCents: integer('budget_cents'), // presupuesto estimado en céntimos
  zone: text('zone'),
  message: text('message'),
  score: integer('score'), // scoring de cualificación
  lostReason: text('lost_reason'),
  // Atribución de marketing (14.17)
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  utmContent: text('utm_content'),
  utmTerm: text('utm_term'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
