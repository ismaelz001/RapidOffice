from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .api.routes import auth, catalog, projects

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(catalog.router, prefix=f"{settings.API_V1_STR}/catalog", tags=["catalog"])
app.include_router(projects.router, prefix=f"{settings.API_V1_STR}/projects", tags=["projects"])
app.include_router(projects.public_share_router, prefix=f"{settings.API_V1_STR}/share", tags=["share"])

@app.get("/")
async def root():
    return {"message": "RapidOffice Quote API is running", "docs": "/docs"}

@app.get("/health")
async def health_check():
    """Health check to verify if the service is up and DB is configured."""
    return {
        "status": "ok",
        "api_version": settings.VERSION,
        "database_configured": bool(settings.DATABASE_URL)
    }
