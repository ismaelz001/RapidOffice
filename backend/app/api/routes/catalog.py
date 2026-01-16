from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from ...db.session import get_db
from ...models.catalog import CatalogItem
from ...schemas.catalog import CatalogItemRead

router = APIRouter()

@router.get("/", response_model=List[CatalogItemRead])
async def list_catalog(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CatalogItem).order_by(CatalogItem.category))
    return result.scalars().all()
