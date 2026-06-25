from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ...db.session import get_db
from ...models.user import User
from ...core.security import get_password_hash, verify_password, create_access_token
from ...schemas.auth import UserRegister, UserLogin, Token

router = APIRouter()

@router.post("/register", response_model=Token)
async def register(obj_in: UserRegister, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.email == obj_in.email))
    if result.scalar_one_or_none():
        raise HTTPException(status_code=400, detail="User already exists")
    
    user = User(
        email=obj_in.email,
        password_hash=get_password_hash(obj_in.password)
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)
    
    return {"access_token": create_access_token(user.id), "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(obj_in: UserLogin, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).filter(User.email == obj_in.email))
    user = result.scalar_one_or_none()
    
    if not user or not verify_password(obj_in.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
        
    return {"access_token": create_access_token(user.id), "token_type": "bearer"}
