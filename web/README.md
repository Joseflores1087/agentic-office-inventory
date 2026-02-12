# Office Inventory Web

Frontend web application para el sistema de gestión de inventario de oficina, construido con Angular y Tailwind CSS.

## 🏗️ Tecnologías

- **Angular 19** - Framework web de Google
- **Tailwind CSS** - Framework de CSS utility-first
- **TypeScript** - Superset tipado de JavaScript
- **RxJS** - Programación reactiva

## 📁 Estructura del Proyecto

```
web/
├── src/
│   ├── app/                 # Componentes de la aplicación
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── assets/              # Recursos estáticos
│   ├── styles.scss          # Estilos globales + Tailwind
│   └── index.html
├── tailwind.config.js       # Configuración de Tailwind
└── angular.json             # Configuración de Angular
```

## ⚙️ Configuración

### Tailwind CSS

Tailwind está configurado y listo para usar. Los estilos están disponibles en todos los componentes.

Ejemplo de uso:
```html
<div class="flex items-center justify-between p-4 bg-blue-500 text-white">
  <h1 class="text-2xl font-bold">Inventario</h1>
</div>
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start
# o
ng serve

# La aplicación estará disponible en http://localhost:4200
```

## 🏗️ Build

```bash
# Build de producción
npm run build

# Los archivos compilados estarán en /dist/web
```

## 🧪 Testing

```bash
# Tests unitarios
npm test

# Tests con cobertura
ng test --code-coverage

# Tests en modo watch
ng test --watch
```

## 📝 Generar Componentes

```bash
# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio

# Generar módulo
ng generate module nombre-modulo
```

## 🎨 Tailwind CSS Utilities

Algunas utilidades comunes de Tailwind:

```html
<!-- Layout -->
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Cards -->
  </div>
</div>

<!-- Buttons -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón
</button>

<!-- Cards -->
<div class="bg-white shadow-md rounded-lg p-6">
  <h2 class="text-xl font-semibold mb-2">Título</h2>
  <p class="text-gray-600">Contenido</p>
</div>
```

## 📚 Recursos

- [Documentación de Angular](https://angular.io/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Angular CLI](https://angular.io/cli)
