from pydantic import BaseModel, Field, ConfigDict
from uuid import UUID
from typing import List, Dict, Any, Optional
from datetime import datetime

# --- CANVAS DATA SCHEMA ---
class CanvasItemVariant(BaseModel):
    color: Optional[str] = None
    size: Optional[str] = None

class CanvasItem(BaseModel):
    instanceId: str
    catalogItemId: UUID
    x: int
    y: int
    rotation: int = 0
    qty: int = 1
    variant: Optional[CanvasItemVariant] = None

class CanvasMeta(BaseModel):
    unit: str = "px"
    grid: int = 20

class CanvasData(BaseModel):
    version: int = 1
    items: List[CanvasItem] = []
    meta: CanvasMeta = CanvasMeta()

# --- PROJECT SCHEMAS ---
class ProjectCreate(BaseModel):
    name: str = "Nuevo Proyecto"

class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    canvas_data: CanvasData

class ProjectRead(BaseModel):
    id: UUID
    user_id: UUID
    name: str
    currency: str
    canvas_data: CanvasData
    subtotal_cents: int
    tax_cents: int
    total_cents: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
