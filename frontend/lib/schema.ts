import {
    boolean,
    integer,
    jsonb,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uuid,
} from 'drizzle-orm/pg-core';

// ── Enums (deben coincidir con los del scaffold en Supabase) ─────────────────

export const roleEnum = pgEnum('role', [
  'admin', 'comercial', 'catalogo', 'operaciones', 'direccion', 'lectura',
]);

export const leadStatusEnum = pgEnum('lead_status', [
  'nuevo', 'cualificado', 'visita', 'propuesta', 'negociacion',
  'ganado', 'perdido', 'pospuesto',
]);

export const leadSourceEnum = pgEnum('lead_source', [
  'web', 'planificador', 'telefono', 'referido', 'publicidad', 'feria', 'otro',
]);

export const planningStatusEnum = pgEnum('planning_status', [
  'pendiente', 'revisado', 'convertido', 'descartado',
]);

export const taskStatusEnum = pgEnum('task_status', [
  'pendiente', 'en_curso', 'completada', 'cancelada',
]);

export const activityTypeEnum = pgEnum('activity_type', [
  'nota', 'llamada', 'email', 'reunion', 'tarea', 'cambio_estado',
  'presupuesto', 'pedido', 'archivo',
]);

// ── Auth ─────────────────────────────────────────────────────────────────────

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  role: roleEnum('role').notNull().default('lectura'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id),
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});

// ── CRM ──────────────────────────────────────────────────────────────────────

export const company = pgTable('company', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  taxId: text('tax_id'),
  sector: text('sector'),
  website: text('website'),
  phone: text('phone'),
  email: text('email'),
  addressLine: text('address_line'),
  city: text('city'),
  province: text('province'),
  postalCode: text('postal_code'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const contact = pgTable('contact', {
  id: uuid('id').primaryKey().defaultRandom(),
  companyId: uuid('company_id').references(() => company.id),
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  email: text('email'),
  phone: text('phone'),
  role: text('role'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const lead = pgTable('lead', {
  id: uuid('id').primaryKey().defaultRandom(),
  reference: text('reference').notNull().unique(),
  status: leadStatusEnum('status').notNull().default('nuevo'),
  source: leadSourceEnum('source').notNull().default('otro'),
  companyId: uuid('company_id').references(() => company.id),
  contactId: uuid('contact_id').references(() => contact.id),
  ownerId: text('owner_id').references(() => user.id),
  seats: integer('seats'),
  budgetCents: integer('budget_cents'),
  zone: text('zone'),
  message: text('message'),
  score: integer('score'),
  lostReason: text('lost_reason'),
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  utmContent: text('utm_content'),
  utmTerm: text('utm_term'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const planningRequest = pgTable('planning_request', {
  id: uuid('id').primaryKey().defaultRandom(),
  reference: text('reference').notNull().unique(),
  status: planningStatusEnum('status').notNull().default('pendiente'),
  answers: jsonb('answers').notNull(),
  contactName: text('contact_name'),
  contactEmail: text('contact_email'),
  contactPhone: text('contact_phone'),
  companyName: text('company_name'),
  zone: text('zone'),
  seats: integer('seats'),
  budgetCents: integer('budget_cents'),
  leadId: uuid('lead_id').references(() => lead.id),
  reviewedBy: text('reviewed_by').references(() => user.id),
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const task = pgTable('task', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  status: taskStatusEnum('status').notNull().default('pendiente'),
  assigneeId: text('assignee_id').references(() => user.id),
  createdById: text('created_by_id').references(() => user.id),
  entityType: text('entity_type'),
  entityId: uuid('entity_id'),
  dueAt: timestamp('due_at', { withTimezone: true }),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const activity = pgTable('activity', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: activityTypeEnum('type').notNull(),
  entityType: text('entity_type').notNull(),
  entityId: uuid('entity_id').notNull(),
  authorId: text('author_id').references(() => user.id),
  body: text('body'),
  meta: jsonb('meta'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export const fileObject = pgTable('file_object', {
  id: uuid('id').primaryKey().defaultRandom(),
  storageKey: text('storage_key').notNull().unique(),
  originalName: text('original_name').notNull(),
  mimeType: text('mime_type').notNull(),
  sizeBytes: integer('size_bytes').notNull(),
  uploadedById: text('uploaded_by_id').references(() => user.id),
  entityType: text('entity_type'),
  entityId: uuid('entity_id'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export const auditEvent = pgTable('audit_event', {
  id: uuid('id').primaryKey().defaultRandom(),
  requestId: text('request_id'),
  actorId: text('actor_id').references(() => user.id),
  action: text('action').notNull(),
  entityType: text('entity_type'),
  entityId: uuid('entity_id'),
  changes: jsonb('changes'),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
