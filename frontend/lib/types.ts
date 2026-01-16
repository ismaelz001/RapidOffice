export interface User {
    id: number;
    email: string;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
    user?: User;
}

export interface Project {
    id: number;
    name: string;
    canvas_data: CanvasData; 
    is_public: boolean;
    share_token?: string;
    owner_id: number;
    total_cents?: number;
    created_at: string;
    updated_at: string;
}

export interface CanvasData {
    items: CanvasItem[];
    [key: string]: any; // Allow future props like background, settings, etc.
}

export interface CatalogItem {
    id: string;
    type: string;
    name: string;
    price: number; // legacy
    base_price_cents?: number; // DB field
    image_url?: string;
    width?: number; // legacy/pixel width
    height?: number; // legacy/pixel height
    width_cm?: number; // physical width
    depth_cm?: number; // physical depth/height on 2D plane
    height_cm?: number; // physical vertical height
    category?: string;
}

export interface CanvasItem {
    instanceId: string;
    catalogItemId: string;
    x: number;
    y: number;
    rotation: number;
    // Optional props for backward compat or flexibility if needed
    [key: string]: any;
}

export interface CanvasState {
    items: CanvasItem[];
    background?: string;
}
