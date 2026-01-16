# RapidOffice + Quote Backend (MVP Phase 1)

Este es el backend de RapidOffice, una herramienta para comerciales de muebles de oficina que permite diseñar espacios 2D y cotizar en tiempo real.

## Tech Stack
- **FastAPI** (Python 3.11)
- **SQLAlchemy 2.0** (Asíncrono)
- **Postgres** (Ideal para Neon.tech)
- **JWT** para autenticación.

## Configuración Local

1. **Crear entorno virtual e instalar dependencias:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Configurar variables de entorno:**
   Copia `.env.example` a `.env` y rellena tu `DATABASE_URL` (puedes conseguir una gratis en [Neon.tech](https://neon.tech)).
   **Nota:** Asegúrate de que la URL empiece por `postgresql+asyncpg://` para usar el driver asíncrono.

3. **Inicializar Base de Datos y Semillas (Seed):**
   Este comando creará las tablas y los 12 muebles de prueba.
   ```bash
   python -m app.db.init_db
   ```

4. **Ejecutar el servidor:**
   ```bash
   uvicorn app.main:app --reload
   ```

## Documentación API
Una vez corriendo, puedes acceder a:
- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

## Características MVP Implementadas
- **Auth:** Registro y Login con JWT.
- **Catalog:** Listado de catálogo con precios y dimensiones.
- **Projects:** 
  - CRUD completo para el usuario autenticado (multi-tenant).
  - Validación estricta del esquema `canvas_data` mediante Pydantic.
  - Recálculo automático de subtotales, IVA y totales en el servidor al guardar un diseño.
