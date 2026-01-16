import uuid
from sqlalchemy import Column, String, ForeignKey, DateTime, func, BigInteger, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from ..db.base import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    
    name = Column(String, nullable=False)
    currency = Column(String, default="EUR")
    
    # schema fixed via Pydantic at API level
    canvas_data = Column(JSON, nullable=False)
    
    subtotal_cents = Column(BigInteger, default=0)
    tax_cents = Column(BigInteger, default=0)
    total_cents = Column(BigInteger, default=0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User")
