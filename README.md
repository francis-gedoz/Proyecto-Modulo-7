# Aplicacion Fullstack de Comercio Electronico

Proyecto fullstack para un restaurante brasileño con menu de platos típicos por regiones, carrito de compras, autenticacion de usuario y pagos con Stripe.
El frontend esta hecho con React + Vite y el backend con Express + MongoDB.

## Demo local (pantallas principales)

- Home con seleccion de region y acceso al menu.
- Listado de platos y vista de detalle.
- Registro / Login con JWT.
- Carrito con edicion de cantidades.
- Checkout con Stripe y redireccion a paginas de exito/cancelacion.
- Perfil con edicion de datos basicos.

## Stack

**Frontend**

- React 19, Vite 7
- React Router
- Tailwind CSS
- Axios

**Backend**

- Node.js + Express
- MongoDB + Mongoose
- JWT (auth)
- Stripe (pagos)
- bcryptjs, dotenv, cors

## Estructura (carpetas)
```
proyecto7-frontend/
	src/
		components/
		contexts/
		routes/
		config/
proyecto7-backend/
	src/
		config/
		controllers/
		middleware/
		models/
		routes/
```

## Requisitos

- Node.js 18+
- MongoDB (Atlas o local)
- Cuenta y keys de Stripe (modo test)

## Variables de entorno

### Backend (.env)

Crear un archivo `.env` en `proyecto7-backend/` con:
```
MONGODB_URI=... 
PORT=3000
SECRET=...
STRIPE_KEY=...
STRIPE_SUCCESS_URL=http://localhost:5173/pago-exitoso
STRIPE_CANCEL_URL=http://localhost:5173/pago-cancelado
```

### Frontend (.env)

Crear un archivo `.env` en `proyecto7-frontend/` con:
```
VITE_BACKEND_URL=http://localhost:3000
```

> Nota: nunca subas tus claves reales al repo.

## Instalacion y ejecucion

### 1) Backend
```
cd proyecto7-backend
npm install
npm run dev
```
El backend queda en `http://localhost:3000`.

### 2) Frontend
```
cd proyecto7-frontend
npm install
npm run dev
```
El frontend queda en `http://localhost:5173`.

## Endpoints principales (backend)

**Auth / Usuarios**

- `POST /users/register` -> crear usuario
- `POST /users/login` -> login y token
- `GET /users/verify-user` -> validar token (auth)
- `PUT /users/update` -> actualizar perfil (auth)

**Platos**

- `GET /dishes` -> listar todos
- `POST /dishes` -> crear plato (crea producto/precio en Stripe)
- `GET /dishes/region/:region` -> filtrar por region
- `PUT /dishes/:id` -> editar plato
- `DELETE /dishes/:id` -> eliminar plato

**Carrito / Stripe**

- `GET /carts/get-cart` -> obtener carrito (auth)
- `PUT /carts/edit-cart` -> editar carrito (auth)
- `GET /carts/create-checkout-session` -> iniciar pago (auth)

Regiones validas: `Norte`, `Noreste`, `Centro-Oeste`, `Sudeste`, `Sur`.

## Scripts utiles

**Frontend**

- `npm run dev` -> modo desarrollo
- `npm run build` -> build de produccion
- `npm run preview` -> preview del build
- `npm run lint` -> lint

**Backend**

- `npm run dev` -> nodemon

## Notas

- El checkout redirige a las URLs configuradas en `STRIPE_SUCCESS_URL` y `STRIPE_CANCEL_URL`.
- La autenticacion usa JWT con header `Authorization: Bearer <token>`.
- El carrito se guarda en MongoDB y se sincroniza desde el frontend.
