# E-Commerce API

REST API for managing products and variants.

## Tech Stack
- Node.js / Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod (validation)

## Requirements
- Node.js 18+
- PostgreSQL database
- `npm`

## Environment Variables
Set in `.env`:
- `DATABASE_URL` \= PostgreSQL connection string
- `PORT` \= server port (default `3000`)
- `CORS_ORIGINS` \= comma-separated list of allowed origins (e.g. `http://localhost:5173`)

## Install & Run (Local)
1. `cd api`
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev`
5. `npm run dev` \- starts on `http://localhost:3000`

Production build:
- `npm run build`
- `npm run start`

## Deploy (Render)
1. Create a new Web Service pointing to the `api` directory.
2. Build command: `npm install && npx prisma generate && npx prisma migrate deploy && npm run build`
3. Start command: `npm run start`
4. Add env vars: `DATABASE_URL`, `PORT`, `CORS_ORIGINS`.
5. Provision a PostgreSQL database or use an external one.

## CORS
- `CORS_ORIGINS` must match the exact origin \(`scheme://host[:port]`\) of your frontend.
- For multiple origins, use commas with no spaces.
- After changes, redeploy the API.

## API
Base URL:
- Local: `http://localhost:3000`
- Prod: `https://e-commerce-j4bx.onrender.com`

### GET `/products`
Query:
- `category` \= optional string

Responses:
- `200` \= array of products

Curl:
```bash
curl -X GET "http://localhost:3000/products"
curl -X GET "http://localhost:3000/products?category=Laptop"
```

### GET `/products/:id`
Responses:
- `200` \= product
- `404` \= product not found

Curl:
```bash
curl -X GET "http://localhost:3000/products/1"
```

### GET `/categories`
Responses:
- `200` \= array of categories

Curl:
```bash
curl -X GET "http://localhost:3000/products/categories"
```

### POST `/products`
Request body:
- `name` \= string
- `category` \= string
- `image` \= string
- `variants` \= array of objects with `name`, `price`, `description`

Responses:
- `200` \= recently created product
- `400` \= invalid request body

Curl:
```bash
curl -X GET "http://localhost:3000/products"
     -H "Content-Type: application/json" \
     -d '{"name":"iPhone 17 Pro Max","category":"Mobile","variants":[{"name":"512 GB","price":1789,"description":"512 GB","amount":10}]}'
```