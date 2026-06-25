import uuid
from sqlalchemy import Column, String, Integer, DateTime, func, BigInteger
from sqlalchemy.dialects.postgresql import UUID
from ..db.base import Base

class CatalogItem(Base):
    __tablename__ = "catalog_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    brand = Column(String, nullable=False)
    name = Column(String, nullable=False)
    sku = Column(String, unique=True, nullable=True)
    category = Column(String, nullable=False)
    
    width_cm = Column(Integer, nullable=False)
    depth_cm = Column(Integer, nullable=False)
    height_cm = Column(Integer, nullable=False)
    
    base_price_cents = Column(BigInteger, nullable=False)
    image_url = Column(String, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
