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
    data: any; // JSONb content of the canvas
    is_public: boolean;
    share_token?: string;
    owner_id: number;
    created_at: string;
    updated_at: string;
}

export interface CatalogItem {
    id: string;
    type: string;
    name: string;
    price: number;
    image_url?: string;
    width?: number;
    height?: number;
    category?: string;
}

export interface CanvasItem {
    id: string;
    type: string; // e.g., 'chair', 'desk', 'rect'
    x: number;
    y: number;
    rotation: number;
    scaleX?: number;
    scaleY?: number;
    width?: number;
    height?: number;
    fill?: string;
    src?: string; // For images
    name?: string;
    price?: number;
    metadata?: any;
}

export interface CanvasState {
    items: CanvasItem[];
    background?: string;
}
