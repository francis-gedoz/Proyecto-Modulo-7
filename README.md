# Aplicación Fullstack - Restaurante Sabor do Brasil

Proyecto fullstack de comercio electrónico de un restaurante de comidas típicas brasileñas. Incluye catálogo de platos por región, autenticación de usuarios, carrito de compras, checkout con Stripe y páginas informativas complementarias.

## Live Deploy en Render.com:

https://proyecto-modulo-7-1.onrender.com/

Este proyecto busca transmitir la cercanía de la cultura brasileña a través de su cocina: cada región refleja historia, identidad y tradición en sus sabores. La experiencia fue diseñada para que quien navegue el sitio no solo vea platos, sino que conecte con una forma de vivir la gastronomía como encuentro, memoria y diversidad cultural.

> Este proyecto fue desarrollado únicamente con fines académicos.

## Estado actual

- Frontend en React + Vite con rutas públicas y privadas.
- Backend en Express + MongoDB con autenticación JWT.
- Integración con Stripe para creación de productos/precios y sesión de pago.
- Rutas adicionales en frontend: `viaja-brasil` y `udd-4.0`.

## Stack

### Frontend

- React `19.2.0`
- React Router DOM `7.12.0`
- Vite `7.2.4`
- Tailwind CSS `4.1.18`
- Axios `1.13.2`

### Backend

- Node.js + Express `5.2.1`
- MongoDB + Mongoose `9.0.1`
- JWT (`jsonwebtoken`)
- Stripe `20.2.0`
- bcryptjs, cors, dotenv

## Estructura del repositorio

```txt
proyecto7/
├── proyecto7-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── routes/
│   │   ├── config/
│   │   └── utils/
│   └── ...
├── proyecto7-backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   └── ...
└── README.md
```

## Vistas y rutas principales (frontend)

- `/` Home con acceso por región.
- `/platos` Listado general de platos.
- `/platos/region/:region` Filtrado por región.
- `/platos/:slug` Detalle de plato.
- `/registro` Registro de usuario.
- `/iniciar-sesion` Login (ruta protegida para usuarios no autenticados).
- `/carrito` Checkout/carrito (ruta privada).
- `/perfil` Perfil de usuario (ruta privada).
- `/pago-exitoso` y `/pago-cancelado` retorno de Stripe.
- `/viaja-brasil` contenido informativo gastronómico por regiones.
- `/udd-4.0` página de agradecimientos.

## API principal (backend)

Base local sugerida: `http://localhost:3000`

### Usuarios

- `POST /users/register` crear usuario.
- `POST /users/login` iniciar sesión y obtener token.
- `GET /users/verify-user` validar token (auth).
- `PUT /users/update` actualizar usuario (auth).

### Platos

- `GET /dishes` listar todos los platos.
- `POST /dishes` crear plato (también crea producto/precio en Stripe).
- `GET /dishes/region/:region` listar por región.
- `PUT /dishes/:id` actualizar plato.
- `DELETE /dishes/:id` eliminar plato.

Regiones válidas de backend: `Norte`, `Noreste`, `Centro-Oeste`, `Sudeste`, `Sur`.

### Carrito y checkout

- `GET /carts/get-cart` obtener carrito (auth).
- `PUT /carts/edit-cart` editar carrito (auth).
- `GET /carts/create-checkout-session` crear sesión de Stripe (auth).

## Variables de entorno

> Importante: nunca subas credenciales reales al repositorio.

### Backend (`proyecto7-backend/.env`)

```env
MONGODB_URI=...
PORT=3000
SECRET=...
STRIPE_KEY=...
STRIPE_SUCCESS_URL=http://localhost:5173/pago-exitoso
STRIPE_CANCEL_URL=http://localhost:5173/pago-cancelado
```

### Frontend (`proyecto7-frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:3000
```

## Instalación y ejecución local

### 1) Backend

```bash
cd proyecto7-backend
npm install
npm run dev
```

### 2) Frontend

```bash
cd proyecto7-frontend
npm install
npm run dev
```

Frontend local: `http://localhost:5173`

## Scripts útiles

### Frontend

- `npm run dev` desarrollo.
- `npm run build` build de producción.
- `npm run preview` previsualización del build.
- `npm run lint` linting.

### Backend

- `npm run dev` ejecución con nodemon.

## Deploy

- URL de API en Render usada actualmente por frontend: `https://proyecto-modulo-7-j005.onrender.com`
- Si cambias entorno (local/staging/prod), actualiza `VITE_BACKEND_URL` y las URLs de retorno de Stripe.

## Notas técnicas

- La autenticación utiliza header `Authorization: Bearer <token>`.
- El token se almacena en frontend para consumo de rutas privadas.
- El checkout redirige según `STRIPE_SUCCESS_URL` y `STRIPE_CANCEL_URL`.
