// frontend/types/api.ts

/** Canonical frontend contract aligned to the current FastAPI schemas.
 *  If backend changes naming, normalize in lib/api (mapping) — NOT in UI components.
 */

export type UUID = string;
export type ISODateTime = string;
export type Cents = number;

// --- Auth ---
export type TokenResponse = {
  access_token: string;
  token_type: 'bearer' | string;
};

// --- Catalog ---
export type CatalogItem = {
  id: UUID;
  brand: string;
  name: string;
  sku?: string | null;
  category: string;

  width_cm: number;
  depth_cm: number;
  height_cm: number;

  base_price_cents: Cents;
  image_url?: string | null;

  created_at?: ISODateTime;
};

// --- Canvas ---
export type CanvasItemVariant = {
  color?: string | null;
  size?: string | null;
};

export type CanvasItem = {
  instanceId: string;
  catalogItemId: UUID;
  x: number;
  y: number;
  rotation: number;
  qty: number;
  variant?: CanvasItemVariant | null;
};

export type CanvasMeta = {
  unit: 'px' | string;
  grid: number;
};

export type CanvasData = {
  version: number;
  items: CanvasItem[];
  meta: CanvasMeta;
};

// --- Projects ---
export type Project = {
  id: UUID;
  user_id: UUID;
  name: string;
  currency: string;

  canvas_data: CanvasData;

  subtotal_cents: Cents;
  tax_cents: Cents;
  total_cents: Cents;

  created_at: ISODateTime;
  updated_at: ISODateTime;
};

export type ProjectCreate = {
  name?: string;
};

export type ProjectUpdate = {
  name?: string;
  canvas_data: CanvasData;
};

// --- Share (backend currently has routes, but model is missing share_token column) ---
export type ShareTokenResponse = { token: string };
