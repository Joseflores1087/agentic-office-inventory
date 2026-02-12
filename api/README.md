# Office Inventory API

Backend API para el sistema de gestión de inventario de oficina, construido con NestJS y TypeORM.

## 🏗️ Tecnologías

- **NestJS** - Framework progresivo de Node.js
- **TypeORM** - ORM para TypeScript
- **MySQL** - Base de datos relacional
- **TypeScript** - Superset tipado de JavaScript

## 📁 Estructura del Proyecto

```
api/
├── src/
│   ├── items/              # Módulo de Items
│   │   ├── entities/       # Entidades TypeORM
│   │   ├── items.controller.ts
│   │   ├── items.service.ts
│   │   └── items.module.ts
│   ├── app.module.ts       # Módulo principal con config TypeORM
│   └── main.ts             # Punto de entrada (prefijo /api + CORS)
├── test/                   # Tests E2E
└── .env                    # Variables de entorno (no en git)
```

## ⚙️ Configuración

### Variables de Entorno

Crear archivo `.env` en la raíz de `/api`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=office_inventory
```

### Base de Datos

Crear la base de datos MySQL:

```sql
CREATE DATABASE office_inventory;
```

**Nota:** Las tablas se crean automáticamente al iniciar el servidor (`synchronize: true`).

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo con hot-reload
npm run start:dev

# Modo producción
npm run start:prod
```

El servidor estará disponible en: **http://localhost:3000**

## 📡 API Endpoints

### Items

#### `GET /api/items`
Obtiene todos los items del inventario.

**Respuesta:**
```json
[
  {
    "id": 1,
    "nombre": "Laptop Dell Latitude 5420",
    "descripcion": "Laptop corporativa Intel i5, 16GB RAM, 512GB SSD",
    "categoria": "Hardware",
    "stock_actual": 5,
    "precio_unitario": "850.00",
    "stock_critico": 2,
    "created_at": "2026-02-12T10:00:00.000Z",
    "updated_at": "2026-02-12T10:00:00.000Z"
  }
]
```

## 🗄️ Modelo de Datos

### Item Entity

| Campo           | Tipo          | Descripción                           |
|----------------|---------------|---------------------------------------|
| id             | INT (PK)      | Identificador único auto-incremental  |
| nombre         | VARCHAR(255)  | Nombre del item                       |
| descripcion    | TEXT          | Descripción detallada (nullable)      |
| categoria      | ENUM          | Hardware, Papelería, Periféricos      |
| stock_actual   | INT           | Cantidad disponible en inventario     |
| precio_unitario| DECIMAL(10,2) | Precio por unidad                     |
| stock_critico  | INT           | Nivel de stock que requiere reposición|
| created_at     | TIMESTAMP     | Fecha de creación                     |
| updated_at     | TIMESTAMP     | Fecha de última actualización         |

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests E2E
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

## 🏗️ Build

```bash
# Compilar para producción
npm run build

# Los archivos compilados estarán en /dist
```

## 🔄 Datos de Ejemplo

Al iniciar el servidor por primera vez, si la base de datos está vacía, se insertarán automáticamente 6 items de ejemplo:

- Laptop Dell (Hardware)
- Mouse Logitech (Periféricos)
- Resma de Papel (Papelería)
- Monitor LG (Hardware)
- Teclado Mecánico (Periféricos)
- Cuaderno (Papelería)

## 📚 Recursos

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de TypeORM](https://typeorm.io)
