# Backend - Gestor de Proyectos con IA

## 🚀 Descripción
API REST desarrollada en Express.js con TypeScript para gestionar proyectos con integración de IA Gemini. Proporciona operaciones CRUD completas y endpoints inteligentes para análisis de proyectos.

## 🛠️ Tecnologías Implementadas

### Core Framework
- **Express.js 5.1.0** - Servidor web
- **TypeScript 5.9.3** - Tipado estático
- **Node.js** - Runtime environment

### Base de Datos
- **PostgreSQL** - Base de datos relacional
- **Sequelize** - ORM para modelos
- **pg** - Cliente PostgreSQL

### Seguridad
- **bcrypt** - Encriptación de contraseñas
- **cors** - Configuración CORS
- **express-rate-limit** - Limitación de peticiones
- **express-validator** - Validación de datos

### IA y Utilidades
- **@google/generative-ai** - Integración con Gemini AI
- **dotenv** - Variables de entorno
- **morgan** - Logging de requests
- **colors** - Colores en consola

## 🚀 Inicio Rápido

### Prerrequisitos
- Docker
- Docker Compose

### Paso 1: Clonar el repositorio
```bash
git clone <repository-url>
cd project-manager/backend-express

```

### Paso 2: Configurar las variables de entorno en el .env

```bash
DEBUG=true
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/basedatos
PORT=4000
FRONTEND_URL=http://localhost:3000
API_KEY_GEMINI=tu_api_key_de_gemini
```

### Paso 3: Ejecutar con docker-compose

```bash
docker-compose up --build
```