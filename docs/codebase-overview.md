# Codebase Overview

## Snapshot

`D:\WebNUOCHOA` is a workspace containing two subprojects:

- `app/`: frontend React application
- `api/`: backend Express API

The root folder is only a container for those projects and does **not** have its own `package.json`. Development commands are run inside each subdirectory.

The `docs/` folder currently contains:

- `docs/codebase-overview.md`: current codebase snapshot
- `docs/thumbnail-update-summary.md`: thumbnail and seed-data update note

## Frontend summary

### Stack

- React 19
- Vite 7
- Tailwind CSS v4
- `react-router-dom`
- Redux Toolkit
- `react-hook-form`
- Yup + `@hookform/resolvers`
- `axios`
- `sonner`
- shadcn-style component setup (`components.json`)
- shared perfume listing sidebar component
- shared debounce hook for UI filtering

### High-level flow

The frontend bootstrap path is:

1. `app/src/main.jsx`
2. `app/src/App.jsx`
3. `app/src/components/AppRouter/index.jsx`

`app/src/main.jsx` wraps the app with `BrowserRouter` and the Redux store provider. `app/src/App.jsx` mounts the Sonner toaster and renders the route tree. `app/src/layouts/DefaultLayouts/index.jsx` also preloads auth state plus shared brand/category data for storefront pages.

### Routing and layouts

Routing is implemented with layout wrappers:

- `DefaultLayout` for storefront pages
- `DefaultLayout/Header` for the main storefront navigation
- `DefaultLayout/Footer` for the global storefront footer
- `AuthLayout` for authentication pages
- `PerfumeCategorySidebar` for the shared left sidebar used by perfume listing pages

Current registered route table:

- `/` → `app/src/pages/Home/index.jsx`
- `/nuoc-hoa-nam` → `app/src/pages/Product/MenPerfume/index.jsx`
- `/nuoc-hoa-nu` → `app/src/pages/Product/WomenPerfume/index.jsx`
- `/nuoc-hoa-unisex` → `app/src/pages/Product/UnisexPerfume/index.jsx`
- `/lien-he` → `app/src/pages/Contact/index.jsx`
- `/gioi-thieu` → `app/src/pages/About/index.jsx`
- `/tai-khoan` → `app/src/pages/AccountIndividual/index.jsx`
- `/auth/login` → `app/src/pages/Auth/LoginForm/index.jsx`
- `/auth/register` → `app/src/pages/Auth/RegisterForm/index.jsx`

Other current routing notes:

- `app/src/pages/Product/ProductDetails/index.jsx` exists in the codebase but is not currently registered in `AppRouter`.
- The header still links to `/thuong-hieu` and `/tin-tuc`, but those routes are not currently registered.
- The footer still contains a legacy `to="/ve-lan-perfume"` link while the active about page route is `/gioi-thieu`.

### Current frontend domains

#### Storefront UI

The storefront currently includes:

- a landing/home page
- three perfume category pages: men, women, and unisex
- an about page
- a contact page
- an account page
- a shared header/footer shell for the default layout
- a shared perfume sidebar that renders category and brand lists from Redux common state

The category pages fetch products from the backend and share a reusable left sidebar component.

The home page also includes an additional centered introduction section ("GIỚI THIỆU" / "Về DUWNG Perfume") beneath the marquee band.

#### Auth implementation

The auth flow is connected to application behavior, not just static UI.

Current auth pieces:

- Redux store: `app/src/store/store.js`
- Auth slice: `app/src/features/Auth/authSlice.js`
- Async auth thunks: `app/src/service/Auth/AuthService.js`
- Shared HTTP client: `app/src/utils/http.js`
- Validation schemas: `app/src/utils/validate.js`
- Password visibility hook: `app/src/utils/showPassword.js`

Login and register pages use `react-hook-form` with Yup resolvers. The frontend stores access and refresh tokens in `localStorage`, the shared HTTP client attaches the bearer token to requests, and the default layout dispatches `authMe()` to restore the current user.

#### Product and common catalog data

A product/catalog data flow already exists in the frontend codebase:

- Product slice: `app/src/features/Product/productSlice.js`
- Common catalog slice: `app/src/features/Product/commonSlice.js`
- Product and catalog async thunks: `app/src/service/Product/ProductService.js`
- Store registration: `app/src/store/store.js`
- Shared sidebar consumer: `app/src/components/PerfumeCategorySidebar/index.jsx`
- Shared debounce hook: `app/src/hooks/useDebounce.js`

The perfume category pages fetch product lists from the backend, while `DefaultLayout` preloads shared brand/category data for the sidebar.

`PerfumeCategorySidebar` includes local selection UI for categories/brands and a debounced text search input for brand names.

### Shared frontend conventions

- Use `@/...` imports for source files.
- Shared class merging goes through `app/src/lib/utils.js` via `cn()`.
- Shared UI primitives live under `app/src/components/ui/`.
- Current reusable primitives include `button.jsx` and `dropdown-menu.jsx`.
- Global theme tokens, animations, Tailwind v4 custom properties, and site-wide font tokens live in `app/src/index.css`.
- The site font mapping currently uses `SVN-Gilroy` as the primary token with `Josefin Sans` and `Inter` also defined.

### Assets

Frontend public assets live under `app/public/` and are currently referenced with root-relative URLs such as:

- `/LogoWeb.png`
- `/bg-formlogin.png`
- `/bg-1.jpg`
- `/bg-2.jpg`
- `/bg-3.jpg`
- `/bg-4.jpg`
- `/bg-5.jpg`

## Backend summary

The backend entrypoint is `api/server.js`.

It currently:

- loads environment variables with `dotenv`
- enables CORS
- parses JSON and urlencoded bodies
- applies custom response middleware
- mounts the API router at `/api`
- applies a 404 handler
- listens on `process.env.PORT || 3000`

### Backend structure

The backend uses a modular source layout under `api/src/`:

- `config/`
- `controllers/`
- `lib/`
- `middlewares/`
- `router/`
- `services/`
- `utils/`

Current backend support files also include:

- `api/prisma.config.ts`
- `api/prisma/seed.sql`
- `api/prisma/fix_encoding.sql`
- `api/prisma/update_thumbnails.sql`
- `api/prisma/migrations/`
- `api/generated/prisma/`

`api/src/router/index.js` dynamically mounts every `*.route.js` file in that directory. Because of that, route filenames define the mounted API path segment.

### Current API surface

#### Auth

Implemented auth endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/refresh-token`

Related backend files:

- `api/src/router/auth.route.js`
- `api/src/controllers/auth.controller.js`
- `api/src/services/auth.service.js`
- `api/src/middlewares/authRequire.js`

#### Product

Implemented product and catalog endpoints:

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/brands`
- `GET /api/categories`

Related backend files:

- `api/src/router/products.route.js`
- `api/src/router/brands.route.js`
- `api/src/router/categories.route.js`
- `api/src/controllers/product.controller.js`
- `api/src/services/product.service.js`

Current backend catalog service also exposes brand and category listing methods used by the storefront sidebar.

### Data layer

The backend already includes Prisma setup:

- schema: `api/prisma/schema.prisma`
- generated client output: `api/generated/prisma`
- Prisma helper: `api/src/lib/prisma.js`

The schema currently covers both auth and catalog data.

Main models:

- `User`
- `RefreshToken`
- `Brand`
- `Category`
- `Product`
- `ProductImage`
- `ProductVariant`

Main enums:

- `Role`
- `AuthProvider`
- `Gender`
- `Concentration`

## Commands currently available

### Frontend

```bash
cd app
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend

```bash
cd api
npm install
npm run start
npm run dev
```

## Missing tooling today

Not currently configured:

- automated tests
- frontend test script
- backend test script
- backend lint script
- root-level package runner
