# 🚀 Guía de Deploy - Inventario de Oficina

## 📋 Arquitectura de Deploy

- **Frontend (Angular)** → Vercel
- **Backend (NestJS)** → Railway
- **Base de Datos (MySQL)** → Railway

---

## 1️⃣ Deploy de Base de Datos en Railway

### Paso 1: Crear cuenta en Railway
1. Ve a [railway.app](https://railway.app)
2. Regístrate con GitHub
3. Clic en "New Project"

### Paso 2: Agregar MySQL
1. Clic en "+ New" → "Database" → "Add MySQL"
2. Espera a que se provisione (1-2 minutos)
3. Clic en la base de datos → "Variables" tab
4. Copia las credenciales:
   - `MYSQL_HOST`
   - `MYSQL_PORT`
   - `MYSQL_USER`
   - `MYSQL_PASSWORD`
   - `MYSQL_DATABASE`

---

## 2️⃣ Deploy del Backend en Railway

### Paso 1: Conectar repositorio
1. En el mismo proyecto de Railway, clic en "+ New" → "GitHub Repo"
2. Selecciona tu repositorio `agentic-office-inventory`
3. Railway detectará automáticamente la carpeta `api`

### Paso 2: Configurar variables de entorno
1. Clic en el servicio del backend → "Variables" tab
2. Agregar las siguientes variables:

```env
DB_HOST=${{MySQL.MYSQL_HOST}}
DB_PORT=${{MySQL.MYSQL_PORT}}
DB_USER=${{MySQL.MYSQL_USER}}
DB_PASSWORD=${{MySQL.MYSQL_PASSWORD}}
DB_NAME=${{MySQL.MYSQL_DATABASE}}
PORT=3007
```

### Paso 3: Configurar build
1. Ve a "Settings" → "Build Configuration"
2. Root Directory: `api`
3. Build Command: `npm run build`
4. Start Command: `npm run start:prod`

### Paso 4: Deploy
1. Clic en "Deploy"
2. Espera 2-3 minutos
3. Copia la URL del backend (ej: `https://tu-app.railway.app`)

---

## 3️⃣ Deploy del Frontend en Vercel

### Paso 1: Preparar frontend
Actualiza la URL del backend en el servicio de items:

**Archivo:** `web/src/app/items/items.service.ts`

```typescript
private apiUrl = 'https://tu-backend.railway.app/api/items';
```

### Paso 2: Hacer commit y push
```bash
git add .
git commit -m "config: actualizar URL del backend para producción"
git push origin main
```

### Paso 3: Deploy en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Clic en "Add New" → "Project"
3. Importa tu repositorio de GitHub
4. Configuración:
   - **Framework Preset:** Angular
   - **Root Directory:** `web`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/web`

5. Clic en "Deploy"
6. Espera 2-3 minutos

---

## 4️⃣ Configuración de CORS

El backend ya tiene CORS habilitado, pero si necesitas restringirlo:

**Archivo:** `api/src/main.ts`

```typescript
app.enableCors({
  origin: ['https://tu-frontend.vercel.app'],
  credentials: true,
});
```

---

## ✅ Verificación Final

### Backend
1. Ve a `https://tu-backend.railway.app/api`
2. Deberías ver: `{"message":"Office Inventory API"}`
3. Ve a `https://tu-backend.railway.app/api/items`
4. Deberías ver el array de items

### Frontend
1. Ve a `https://tu-frontend.vercel.app`
2. Deberías ver el inventario cargado
3. Prueba hacer una transacción
4. Verifica que todo funcione correctamente

---

## 🔧 Troubleshooting

### Error: "Cannot connect to database"
- Verifica que las variables de entorno estén correctas
- Asegúrate de que MySQL esté corriendo en Railway
- Revisa los logs: Railway → Backend Service → "Deployments" → Click en el último deploy → "View Logs"

### Error: "CORS policy"
- Verifica que el backend tenga `app.enableCors()` en `main.ts`
- Revisa la URL del backend en el frontend

### Error: "nest: command not found"
- Ya está solucionado con `npx nest build` en package.json
- Verifica que `@nestjs/cli` esté en `dependencies` (no `devDependencies`)

---

## 💰 Costos

- **Railway:** Plan gratuito con $5 de crédito mensual (~500 horas)
- **Vercel:** Plan gratuito (100 GB bandwidth/mes)
- **Total:** **GRATIS** 🎉

---

## 📊 Monitoreo

### Railway
- Dashboard → Service → "Metrics"
- CPU, Memory, Network usage

### Vercel
- Dashboard → Project → "Analytics"
- Pageviews, Response times

---

## 🔄 Actualizaciones

Para actualizar tu app:

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main
```

- **Railway:** Deploy automático en cada push
- **Vercel:** Deploy automático en cada push

---

## 🎯 Próximos Pasos

1. ✅ Configurar dominio personalizado en Vercel
2. ✅ Agregar autenticación (Auth0, Supabase Auth)
3. ✅ Implementar backups automáticos de BD
4. ✅ Configurar monitoring (Sentry, LogRocket)
5. ✅ Implementar CI/CD con tests automáticos

---

**¿Necesitas ayuda?** Abre un issue en el repositorio de GitHub.
