from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from uuid import UUID

from ...db.session import get_db
from ...models.project import Project
from ...models.catalog import CatalogItem
from ...models.user import User
from ...schemas.project import ProjectRead, ProjectCreate, ProjectUpdate
from ...api.deps import get_current_user
from ...core.config import settings

router = APIRouter()

@router.get("/", response_model=List[ProjectRead])
async def list_projects(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    result = await db.execute(
        select(Project).filter(Project.user_id == current_user.id).order_by(Project.updated_at.desc())
    )
    return result.scalars().all()

@router.post("/", response_model=ProjectRead)
async def create_project(
    obj_in: ProjectCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    project = Project(
        user_id=current_user.id,
        name=obj_in.name,
        canvas_data={"version": 1, "items": [], "meta": {"unit": "px", "grid": 20}},
        subtotal_cents=0,
        tax_cents=0,
        total_cents=0
    )
    db.add(project)
    await db.commit()
    await db.refresh(project)
    return project

@router.get("/{id}", response_model=ProjectRead)
async def get_project(
    id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    result = await db.execute(
        select(Project).filter(Project.id == id, Project.user_id == current_user.id)
    )
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.put("/{id}", response_model=ProjectRead)
async def update_project(
    id: UUID,
    obj_in: ProjectUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    result = await db.execute(
        select(Project).filter(Project.id == id, Project.user_id == current_user.id)
    )
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    # Update basic fields
    if obj_in.name:
        project.name = obj_in.name
    
    # Update Canvas Data
    project.canvas_data = obj_in.canvas_data.model_dump()
    
    # --- RECALCULATE TOTALS ---
    subtotal = 0
    item_ids = {item.catalogItemId for item in obj_in.canvas_data.items}
    if item_ids:
        cat_result = await db.execute(select(CatalogItem).filter(CatalogItem.id.in_(item_ids)))
        catalog_map = {item.id: item.base_price_cents for item in cat_result.scalars().all()}
        for item in obj_in.canvas_data.items:
            price = catalog_map.get(item.catalogItemId, 0)
            subtotal += price * item.qty
            
    project.subtotal_cents = subtotal
    project.tax_cents = int(round(subtotal * settings.TAX_RATE))
    project.total_cents = project.subtotal_cents + project.tax_cents
    
    await db.commit()
    await db.refresh(project)
    return project

@router.post("/{id}/share")
async def create_share_link(
    id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    result = await db.execute(
        select(Project).filter(Project.id == id, Project.user_id == current_user.id)
    )
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return {"token": project.share_token}

# New Top Level Router for public sharing (no auth required)
public_share_router = APIRouter()

@public_share_router.get("/{token}", response_model=ProjectRead)
async def get_shared_project(
    token: str,
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(
        select(Project).filter(Project.share_token == token)
    )
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(status_code=404, detail="Proposal not found")
    return project
