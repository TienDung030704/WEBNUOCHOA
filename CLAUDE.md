# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Workspace layout

This workspace contains two separate Node projects:

- `app/`: the frontend React application
- `api/`: the backend Express API

The workspace root does **not** have its own `package.json`, so run commands inside `app/` or `api/`.

## Common commands

### Frontend (`app/`)

```bash
cd app
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend (`api/`)

```bash
cd api
npm install
npm run start
npm run dev
```

## Tests

There is currently no first-party test runner configured in either `app/` or `api/`.

## Architecture overview

### Frontend

The frontend is a React 19 + Vite 7 SPA using Tailwind CSS v4.

- Entry flow: `app/src/main.jsx` → `app/src/App.jsx` → `app/src/components/AppRouter/index.jsx`
- App bootstrap: `app/src/main.jsx` wraps the app with `BrowserRouter` and the Redux `Provider`
- Global UI shell: `app/src/App.jsx` mounts the Sonner `Toaster` and renders the router
- Path alias: `@` maps to `app/src` via `app/vite.config.js` and `app/jsconfig.json`
- Styling: global design tokens, animations, theme variables, and site-wide font tokens live in `app/src/index.css`
- Shared helper: `app/src/lib/utils.js` exports `cn()`
- UI primitives currently in use live under `app/src/components/ui/`, including `button.jsx` and `dropdown-menu.jsx`
- Shared perfume listing sidebar lives in `app/src/components/PerfumeCategorySidebar/index.jsx`
- Shared debounce hook for UI interactions lives in `app/src/hooks/useDebounce.js`

Routing is layout-based and already implemented:

- `app/src/layouts/DefaultLayouts/index.jsx` wraps storefront pages and preloads `authMe()`, brands, and categories
- `app/src/layouts/DefaultLayouts/Header/index.jsx` provides the global header/navigation for the default layout
- `app/src/layouts/DefaultLayouts/Footer/index.jsx` provides the global storefront footer
- `app/src/layouts/AuthLayout/index.jsx` wraps auth pages
- `app/src/components/AppRouter/index.jsx` is the central route table
- Current registered routes:
  - `/`
  - `/nuoc-hoa-nam`
  - `/nuoc-hoa-nu`
  - `/nuoc-hoa-unisex`
  - `/lien-he`
  - `/gioi-thieu`
  - `/tai-khoan`
  - `/auth/login`
  - `/auth/register`

Current frontend domains in the codebase:

- Storefront pages:
  - `app/src/pages/Home/index.jsx`
  - `app/src/pages/Product/MenPerfume/index.jsx`
  - `app/src/pages/Product/WomenPerfume/index.jsx`
  - `app/src/pages/Product/UnisexPerfume/index.jsx`
  - `app/src/pages/About/index.jsx`
  - `app/src/pages/Contact/index.jsx`
  - `app/src/pages/AccountIndividual/index.jsx`
  - `app/src/pages/Product/ProductDetails/index.jsx` (present in the codebase but not currently wired into the router)
- Auth pages:
  - `app/src/pages/Auth/LoginForm/index.jsx`
  - `app/src/pages/Auth/RegisterForm/index.jsx`
- Store setup: `app/src/store/store.js`
- Auth slice: `app/src/features/Auth/authSlice.js`
- Product slice: `app/src/features/Product/productSlice.js`
- Common catalog slice: `app/src/features/Product/commonSlice.js`
- Async auth calls: `app/src/service/Auth/AuthService.js`
- Async product calls: `app/src/service/Product/ProductService.js`
- Shared HTTP client: `app/src/utils/http.js`
- Validation schemas: `app/src/utils/validate.js`
- Shared password visibility hook: `app/src/utils/showPassword.js`
- Static source assets: `app/src/assets/`

Important current-state notes:

- The auth forms are already wired into `react-hook-form` + Yup resolver flow.
- Auth state is handled through Redux Toolkit.
- The shared HTTP client attaches the bearer token from `localStorage`.
- The default layout dispatches `authMe()` to hydrate the current user.
- The default layout also preloads brands and categories into the shared `common` Redux slice.
- The perfume category pages fetch product lists from the backend and render API-backed product cards.
- `PerfumeCategorySidebar` supports UI-side category/brand selection state plus debounced brand search input.
- The home page includes an additional “GIỚI THIỆU / Về DUWNG Perfume” section below the marquee.
- Global font tokens in `app/src/index.css` map the site to `SVN-Gilroy`, `Josefin Sans`, and `Inter`.
- The header still contains links to `/thuong-hieu` and `/tin-tuc`, but those routes are not currently registered in `AppRouter`.
- The footer still contains a legacy `to="/ve-lan-perfume"` quick link even though the registered about route is `/gioi-thieu`.

Assets used by the current frontend come from `app/public/` and are referenced with root-relative URLs such as:

- `/LogoWeb.png`
- `/bg-formlogin.png`
- `/bg-1.jpg`
- `/bg-2.jpg`
- `/bg-3.jpg`
- `/bg-4.jpg`
- `/bg-5.jpg`

### Backend

The backend is an Express API entrypoint in `api/server.js`.

Current server behavior:

- loads environment variables with `dotenv`
- enables `cors`
- parses JSON and urlencoded request bodies
- applies custom response middleware
- mounts the API router at `/api`
- applies a 404 handler
- listens on `process.env.PORT || 3000`

The backend has a modular structure under `api/src/`:

- `config/`
- `controllers/`
- `lib/`
- `middlewares/`
- `router/`
- `services/`
- `utils/`

Routing is assembled dynamically in `api/src/router/index.js`, which auto-loads every `*.route.js` file in that directory. The mounted path is derived from the route filename.

Currently implemented backend route files include:

- `api/src/router/auth.route.js`
- `api/src/router/products.route.js`
- `api/src/router/brands.route.js`
- `api/src/router/categories.route.js`

Currently implemented auth endpoints include:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/refresh-token`

Currently implemented product endpoints include:

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/brands`
- `GET /api/categories`

Database and domain persistence are already present:

- Prisma schema: `api/prisma/schema.prisma`
- Prisma migrations and SQL helpers: `api/prisma/`
- Prisma config: `api/prisma.config.ts`
- Prisma client output: `api/generated/prisma`
- Prisma access helper: `api/src/lib/prisma.js`
- SQL data utilities include `seed.sql`, `fix_encoding.sql`, and `update_thumbnails.sql`

The current Prisma schema includes these main domains:

- Auth/user data: `User`, `RefreshToken`
- Catalog data: `Brand`, `Category`, `Product`, `ProductImage`, `ProductVariant`
- Enums: `Role`, `AuthProvider`, `Gender`, `Concentration`

## Practical guidance for future edits

- Treat `app/` as the primary UI codebase.
- Keep route changes centralized in `app/src/components/AppRouter/index.jsx`.
- Update the default navigation/header through `app/src/layouts/DefaultLayouts/Header/index.jsx` when storefront navigation changes.
- Update the footer through `app/src/layouts/DefaultLayouts/Footer/index.jsx` when storefront footer navigation changes.
- Reuse the existing `@` alias and `cn()` helper instead of introducing duplicate utilities.
- Reuse `app/src/utils/http.js` for frontend API calls.
- Prefer updating the existing auth pages and Redux auth flow instead of creating a parallel auth implementation.
- If you make the catalog pages dynamic, start from the existing product slice and product service instead of creating a second product data flow.
- On the backend, follow the existing `*.route.js` convention under `api/src/router/`.
- Remember that backend route mount paths are derived from route filenames.
- If routing appears broken, inspect the bootstrap path first (`main.jsx`, `App.jsx`, `AppRouter/index.jsx`) before debugging page components.

## Additional notes

Current docs in `docs/`:

- `docs/codebase-overview.md`: human-oriented snapshot of the current codebase
- `docs/thumbnail-update-summary.md`: focused note about the thumbnail/seed data update

## Current top-level structure

```text
D:\WebNUOCHOA/
├─ app/
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  │  ├─ AppRouter/
│  │  │  ├─ PerfumeCategorySidebar/
│  │  │  └─ ui/
│  │  ├─ features/
│  │  │  ├─ Auth/
│  │  │  └─ Product/
│  │  ├─ hooks/
│  │  ├─ layouts/
│  │  │  ├─ AuthLayout/
│  │  │  └─ DefaultLayouts/
│  │  │     ├─ Footer/
│  │  │     └─ Header/
│  │  ├─ lib/
│  │  ├─ pages/
│  │  │  ├─ About/
│  │  │  ├─ AccountIndividual/
│  │  │  ├─ Auth/
│  │  │  ├─ Contact/
│  │  │  ├─ Home/
│  │  │  └─ Product/
│  │  │     ├─ MenPerfume/
│  │  │     ├─ ProductDetails/
│  │  │     ├─ UnisexPerfume/
│  │  │     └─ WomenPerfume/
│  │  ├─ service/
│  │  │  ├─ Auth/
│  │  │  └─ Product/
│  │  ├─ store/
│  │  └─ utils/
│  ├─ components.json
│  ├─ jsconfig.json
│  ├─ package.json
│  └─ vite.config.js
├─ api/
│  ├─ prisma/
│  │  ├─ migrations/
│  │  ├─ fix_encoding.sql
│  │  ├─ schema.prisma
│  │  ├─ seed.sql
│  │  └─ update_thumbnails.sql
│  ├─ src/
│  │  ├─ config/
│  │  ├─ controllers/
│  │  ├─ lib/
│  │  ├─ middlewares/
│  │  ├─ router/
│  │  ├─ services/
│  │  └─ utils/
│  ├─ generated/
│  ├─ package.json
│  ├─ prisma.config.ts
│  └─ server.js
├─ docs/
│  ├─ codebase-overview.md
│  └─ thumbnail-update-summary.md
└─ CLAUDE.md
```
