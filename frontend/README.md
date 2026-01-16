# RapidOffice + Quote Frontend (MVP Phase 1)

Este es el frontend de RapidOffice, construido con Next.js 14 y react-konva para el diseño 2D de oficinas.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React-Konva** (Canvas 2D)
- **Lucide React** (Iconos)

## Configuración Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Copia `.env.example` a `.env` y asegúrate de que `NEXT_PUBLIC_API_BASE_URL` apunta a tu backend corriendo localmente (por defecto `http://localhost:8000/api/v1`).

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Uso:**
   - Regístrate o entra con tu usuario.
   - Crea un proyecto en el Dashboard.
   - En el Editor:
     - Arrastra muebles desde el catálogo (izquierda).
     - Muévelos (se ajustarán al grid de 20px).
     - Rótalos o duplícalos desde el panel derecho.
     - Observa cómo el presupuesto se actualiza en tiempo real al guardar.

## Características Implementadas
- **Auth JWT:** Gestión de tokens y protección de rutas.
- **Canvas 2D:** Stage reactivo con KonvaJS.
- **Drag & Drop:** Integración nativa del navegador con Konva.
- **Autosave:** Cada 5 segundos si hay cambios detectados.
- **Pricing:** El resumen del panel derecho muestra los datos recalculados por el backend.
