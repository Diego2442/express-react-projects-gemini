
# Frontend - Gestor de Proyectos

## 🎯 Descripción
Aplicación web moderna desarrollada con React 19 y TypeScript para la gestión visual de proyectos. Incluye dashboard interactivo, integración con IA y interfaz responsive con temas claro/oscuro.

## 🛠️ Tecnologías Implementadas

### Core Framework
- **React 19.1.1** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.1.7** - Build tool y dev server

### Estilos y UI
- **Tailwind CSS 4.1.14** - Framework de CSS utility-first
- **Radix UI** - Componentes accesibles (Dialog, Select, Tooltip)
- **Lucide React** - Iconografía moderna

### Estado y Datos
- **Zustand 5.0.8** - Gestión de estado global
- **TanStack React Query 5.90.5** - Cache y sincronización de datos
- **Axios 1.12.2** - Cliente HTTP
- **React Hook Form 7.65.0** - Manejo de formularios
- **Zod 4.1.12** - Validación de esquemas

### UX y Utilidades
- **Sonner 2.0.7** - Notificaciones toast
- **Next Themes 0.4.6** - Sistema de temas
- **Chart.js 4.5.1** - Visualización de datos
- **date-fns 4.1.0** - Manipulación de fechas

## 🚀 Inicio Rápido

### Prerrequisitos
- Docker
- Docker Compose

### Paso 1: Clonar el repositorio
```bash
git clone <repository-url>
cd project-manager/frontend-express

```

### Paso 2: Configurar las variables de entorno en el .env

```bash
VITE_API_URL=http://localhost:4000/api/projects
```

### Paso 3: Ejecutar con docker-compose

```bash
docker-compose up --build
```