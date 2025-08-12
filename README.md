# Telemax Pipes App

A premium tobacco pipe mobile application built with React Native Expo and TypeScript.

## Features

- ��� Cross-platform (iOS & Android)
- ��� Modern UI with bottom tab navigation
- ��� Tobacco-themed design
- ��� TypeScript for type safety
- ���️ Professional folder structure
- ��� Expo for easy development

## Tech Stack

- **React Native** with Expo
- **TypeScript**
- **React Navigation**
- **Expo Vector Icons**

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npx expo start`
4. Scan QR code with Expo Go app

## Project Structure
src/
├── components/     # Reusable UI components
├── screens/        # App screens
├── navigation/     # Navigation configuration
├── types/          # TypeScript type definitions
├── constants/      # App constants and colors
└── services/       # API and external services
## Screens

- **Home**: Welcome screen with features and featured pipes
- **Catalog**: Browse pipe categories
- **Cart**: Shopping cart functionality
- **Profile**: User account management

Built with ❤️ for tobacco pipe enthusiasts










Here’s the simple, no‑fluff execution plan (today = app + backend):

Backup first

Dump DB + zip /var/www/api. Confirm API health (/api/health).

Database finalize

Add prices to parts (head/ring/tail).

Ensure tables: products, parts (starter, ring, top, price), users (2FA fields), orders, order_items (can store either product_id or chosen part IDs).

Add audit tables if needed (activity_logs).

Auth (shared for app & web)

JWT auth middleware.

2FA via one‑time code (email/SMS), with /auth/request-2fa and /auth/verify-2fa.

Role guard: requireUser, requireAdmin.

Products API

GET /products (list/search/sort), GET /products/:id.

GET /parts (starter/ring/top with price).

Custom builder API

POST /builder/price -> input part IDs, returns validated price + name combo.

(Optional) POST /builder/save to save presets.

Cart & Checkout

App keeps cart locally; on checkout send { product_id OR parts, quantity }.

Server recalculates prices and creates order.

Orders API

POST /orders (create), GET /orders/me (history), GET /orders/:id.

Admin: GET /admin/orders (filters by status/date).

Admin APIs

CRUD: POST/PUT/DELETE /admin/products, /admin/parts.

Users list + lock/unlock.

Basic stats endpoint for dashboard.

Security hardening

helmet, strict CORS, rate limiting on auth, input validation (zod/joi), prepared statements, strong password rules, HTTPS ready.

i18n (app)

react-i18next with EN/DE; wrap UI strings; language switch.

App wiring (screens)

Force login on launch.

Products list → details → builder (head/ring/tail) → cart → checkout (requires login).

Orders (history), profile.

Tests & deploy

Seed data for products/parts.

Postman collection for endpoints.

pm2 restart, check logs, hit http://209.38.231.125:4000/api/health.

If this looks good, I’ll start with Step 2 (DB changes for parts pricing + order_items for custom builds) and then Step 3 (auth + 2FA). Ready?