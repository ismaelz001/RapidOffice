from pydantic import BaseModel, ConfigDict
from uuid import UUID
from datetime import datetime

class CatalogItemBase(BaseModel):
    brand: str
    name: str
    sku: str | None = None
    category: str
    width_cm: int
    depth_cm: int
    height_cm: int
    base_price_cents: int
    image_url: str | None = None

class CatalogItemRead(CatalogItemBase):
    id: UUID
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
