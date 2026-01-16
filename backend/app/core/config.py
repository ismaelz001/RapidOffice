from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator, model_validator, AnyHttpUrl
from typing import List, Optional, Any, Union

class Settings(BaseSettings):
    PROJECT_NAME: str = "RapidOffice + Quote API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    
    # Database (Flexible: accepts DATABASE_URL or POSTGRES_URL)
    DATABASE_URL: Optional[str] = None
    POSTGRES_URL: Optional[str] = None
    
    # Business Logic
    TAX_RATE: float = 0.21
    
    # CORS (Handles standard JSON list or comma-separated string)
    CORS_ORIGINS: List[str] = ["*"]

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors(cls, v: Any) -> List[str]:
        if isinstance(v, str) and not v.strip().startswith("["):
            return [i.strip() for i in v.split(",") if i.strip()]
        return v

    @model_validator(mode="after")
    def validate_database_url(self) -> "Settings":
        if not self.DATABASE_URL:
            if self.POSTGRES_URL:
                self.DATABASE_URL = self.POSTGRES_URL
            else:
                # Custom clear error message for Render logs
                raise ValueError(
                    "\n\n[CRITICAL ERROR] DATABASE_URL is missing!\n"
                    "Please go to Render Dashboard -> Environment and set 'DATABASE_URL'.\n"
                    "You can find this URL in your Neon/Postgres connection details.\n"
                )
        return self

    model_config = SettingsConfigDict(
        env_file=".env", case_sensitive=True, extra="ignore"
    )

settings = Settings()
