import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from ..core.config import settings
from ..db.base import Base
from ..db.session import SessionLocal
from ..models.user import User
from ..models.catalog import CatalogItem
from ..models.project import Project

# IMPORTANTE: Aseguramos que se importen todos los modelos para que Base los conozca

DEMO_ITEMS = [
    {"brand": "DemoOffice", "name": "Escritorio Ergonómico Pro", "category": "Escritorios", "width_cm": 160, "depth_cm": 80, "height_cm": 75, "base_price_cents": 45000, "sku": "DO-DSK-001"},
    {"brand": "DemoOffice", "name": "Silla Ejecutiva Mesh", "category": "Sillería", "width_cm": 65, "depth_cm": 65, "height_cm": 120, "base_price_cents": 29900, "sku": "DO-CHR-001"},
    {"brand": "DemoOffice", "name": "Mesa de Juntas Oval", "category": "Mesas", "width_cm": 240, "depth_cm": 120, "height_cm": 75, "base_price_cents": 89000, "sku": "DO-TBL-001"},
    {"brand": "DemoOffice", "name": "Armario Bajo 2 Puertas", "category": "Almacenaje", "width_cm": 90, "depth_cm": 45, "height_cm": 80, "base_price_cents": 15000, "sku": "DO-STO-001"},
    {"brand": "DemoOffice", "name": "Buck Móvil 3 Cajones", "category": "Almacenaje", "width_cm": 42, "depth_cm": 55, "height_cm": 60, "base_price_cents": 9500, "sku": "DO-STO-002"},
    {"brand": "DemoOffice", "name": "Sofá Recepción 2 Plazas", "category": "Soft Seating", "width_cm": 140, "depth_cm": 75, "height_cm": 80, "base_price_cents": 55000, "sku": "DO-SOF-001"},
    {"brand": "DemoOffice", "name": "Panel Divisorio Acústico", "category": "Accesorios", "width_cm": 120, "depth_cm": 2, "height_cm": 40, "base_price_cents": 7500, "sku": "DO-ACC-001"},
    {"brand": "DemoOffice", "name": "Lámpara de Escritorio LED", "category": "Iluminación", "width_cm": 20, "depth_cm": 20, "height_cm": 50, "base_price_cents": 4500, "sku": "DO-LIG-001"},
    {"brand": "DemoOffice", "name": "Mesa Café Circular", "category": "Mesas", "width_cm": 80, "depth_cm": 80, "height_cm": 45, "base_price_cents": 18000, "sku": "DO-TBL-002"},
    {"brand": "DemoOffice", "name": "Estantería Alta 5 Baldas", "category": "Almacenaje", "width_cm": 80, "depth_cm": 35, "height_cm": 200, "base_price_cents": 22000, "sku": "DO-STO-003"},
    {"brand": "DemoOffice", "name": "Silla Confidente Apilable", "category": "Sillería", "width_cm": 55, "depth_cm": 55, "height_cm": 85, "base_price_cents": 8500, "sku": "DO-CHR-002"},
    {"brand": "DemoOffice", "name": "Módulo Recepción Recto", "category": "Mesas", "width_cm": 200, "depth_cm": 80, "height_cm": 110, "base_price_cents": 120000, "sku": "DO-TBL-003"},
]

async def init_db():
    engine = create_async_engine(settings.DATABASE_URL)
    async with engine.begin() as conn:
        # NOTE: En producción usar Alembic. Para MVP PHASE 1 recreamos tablas.
        # await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as db:
        for item_data in DEMO_ITEMS:
            # Check if SKU exists to avoid duplicates in seeds
            from sqlalchemy import select
            res = await db.execute(select(CatalogItem).filter(CatalogItem.sku == item_data["sku"]))
            if not res.scalar_one_or_none():
                db.add(CatalogItem(**item_data))
        await db.commit()
    print("Database Initialized & Seeded!")

if __name__ == "__main__":
    asyncio.run(init_db())
