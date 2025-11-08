import { PrismaClient } from './generated/prisma/client.js'
import "dotenv/config";
import express, {Express} from 'express'
import cors from 'cors';
import productRouter from "./product-router.js";

export const prisma = new PrismaClient()
const app: Express = express()
const port = process.env.PORT || 3000;

const allowedOrigins = new Set(
    (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://localhost:3000')
        .split(',')
        .map(o => o.trim())
        .filter(Boolean)
);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.has(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET','POST'],
  allowedHeaders: ['Content-Type','Authorization']
}));

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/api/products', productRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});