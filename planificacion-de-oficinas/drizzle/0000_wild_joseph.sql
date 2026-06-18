CREATE TYPE "public"."activity_type" AS ENUM('nota', 'llamada', 'email', 'reunion', 'cambio_estado', 'tarea', 'sistema');--> statement-breakpoint
CREATE TYPE "public"."lead_source" AS ENUM('planificador', 'formulario_contacto', 'telefono', 'email', 'redes', 'google_ads', 'meta_ads', 'referido', 'otro');--> statement-breakpoint
CREATE TYPE "public"."lead_status" AS ENUM('nuevo', 'contactado', 'cualificado', 'propuesta', 'ganado', 'perdido', 'descartado');--> statement-breakpoint
CREATE TYPE "public"."planning_status" AS ENUM('pendiente', 'en_revision', 'convertida', 'descartada');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'comercial', 'catalogo', 'operaciones', 'direccion', 'lectura');--> statement-breakpoint
CREATE TYPE "public"."task_status" AS ENUM('pendiente', 'en_curso', 'completada', 'cancelada');--> statement-breakpoint
CREATE TABLE "audit_event" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"request_id" text,
	"actor_id" text,
	"action" text NOT NULL,
	"entity_type" text,
	"entity_id" uuid,
	"changes" jsonb,
	"ip_address" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"image" text,
	"role" "role" DEFAULT 'lectura' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "company" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"tax_id" text,
	"sector" text,
	"website" text,
	"phone" text,
	"email" text,
	"address_line" text,
	"city" text,
	"province" text,
	"postal_code" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid,
	"first_name" text NOT NULL,
	"last_name" text,
	"email" text,
	"phone" text,
	"role" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lead" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reference" text NOT NULL,
	"status" "lead_status" DEFAULT 'nuevo' NOT NULL,
	"source" "lead_source" DEFAULT 'otro' NOT NULL,
	"company_id" uuid,
	"contact_id" uuid,
	"owner_id" text,
	"seats" integer,
	"budget_cents" integer,
	"zone" text,
	"message" text,
	"score" integer,
	"lost_reason" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"utm_content" text,
	"utm_term" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "lead_reference_unique" UNIQUE("reference")
);
--> statement-breakpoint
CREATE TABLE "file_object" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"storage_key" text NOT NULL,
	"original_name" text NOT NULL,
	"mime_type" text NOT NULL,
	"size_bytes" integer NOT NULL,
	"uploaded_by_id" text,
	"entity_type" text,
	"entity_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "file_object_storage_key_unique" UNIQUE("storage_key")
);
--> statement-breakpoint
CREATE TABLE "planning_request" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reference" text NOT NULL,
	"status" "planning_status" DEFAULT 'pendiente' NOT NULL,
	"answers" jsonb NOT NULL,
	"contact_name" text,
	"contact_email" text,
	"contact_phone" text,
	"company_name" text,
	"zone" text,
	"seats" integer,
	"budget_cents" integer,
	"lead_id" uuid,
	"reviewed_by" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "planning_request_reference_unique" UNIQUE("reference")
);
--> statement-breakpoint
CREATE TABLE "activity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" "activity_type" NOT NULL,
	"entity_type" text NOT NULL,
	"entity_id" uuid NOT NULL,
	"author_id" text,
	"body" text,
	"meta" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "task" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"status" "task_status" DEFAULT 'pendiente' NOT NULL,
	"assignee_id" text,
	"created_by_id" text,
	"entity_type" text,
	"entity_id" uuid,
	"due_at" timestamp with time zone,
	"completed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audit_event" ADD CONSTRAINT "audit_event_actor_id_user_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contact" ADD CONSTRAINT "contact_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead" ADD CONSTRAINT "lead_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead" ADD CONSTRAINT "lead_contact_id_contact_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contact"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead" ADD CONSTRAINT "lead_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "file_object" ADD CONSTRAINT "file_object_uploaded_by_id_user_id_fk" FOREIGN KEY ("uploaded_by_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "planning_request" ADD CONSTRAINT "planning_request_lead_id_lead_id_fk" FOREIGN KEY ("lead_id") REFERENCES "public"."lead"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "planning_request" ADD CONSTRAINT "planning_request_reviewed_by_user_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activity" ADD CONSTRAINT "activity_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "task" ADD CONSTRAINT "task_assignee_id_user_id_fk" FOREIGN KEY ("assignee_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "task" ADD CONSTRAINT "task_created_by_id_user_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;