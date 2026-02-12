# Agentic Office Inventory

Sistema de gestión de inventario de oficina con backend en NestJS y frontend en Angular.

## 📁 Estructura del Proyecto

```
agentic-office-inventory/
├── api/          # Backend NestJS con TypeORM
├── web/          # Frontend Angular con Tailwind CSS
├── specs/        # Especificaciones del proyecto
└── package.json  # Scripts del monorepo
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ y npm
- MySQL 8.0+ (opcional para desarrollo, el proyecto compila sin él)

### Instalación

Instalar dependencias de ambos proyectos:

```bash
npm run install:all
```

### Configuración de Base de Datos

1. Crear base de datos MySQL:
```sql
CREATE DATABASE office_inventory;
```

2. Configurar credenciales en `api/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=office_inventory
```

**Nota:** TypeORM creará automáticamente las tablas al iniciar el servidor (`synchronize: true`).

### Desarrollo

Iniciar ambos servidores en modo desarrollo:

```bash
# Terminal 1 - Backend (Puerto 3000)
npm run start:api

# Terminal 2 - Frontend (Puerto 4200)
npm run start:web
```

- **API:** http://localhost:3000/api
- **Frontend:** http://localhost:4200

### Endpoints Disponibles

- `GET /api/items` - Obtener todos los items del inventario

## 🧪 Testing

Ejecutar tests de ambos proyectos:

```bash
npm test
```

O ejecutar individualmente:

```bash
npm run test:api   # Tests del backend
npm run test:web   # Tests del frontend
```

## 🏗️ Build

Compilar ambos proyectos para producción:

```bash
npm run build
```

O compilar individualmente:

```bash
npm run build:api  # Build del backend
npm run build:web  # Build del frontend
```

## 📚 Tecnologías

### Backend (`/api`)
- **NestJS** - Framework progresivo de Node.js
- **TypeORM** - ORM para TypeScript/JavaScript
- **MySQL** - Base de datos relacional
- **TypeScript** - Superset tipado de JavaScript

### Frontend (`/web`)
- **Angular 19** - Framework web de Google
- **Tailwind CSS** - Framework de CSS utility-first
- **TypeScript** - Superset tipado de JavaScript

## 📖 Documentación Adicional

- [Backend README](./api/README.md) - Documentación del API
- [Frontend README](./web/README.md) - Documentación del frontend

## 📝 License

MIT