import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from "dotenv"
dotenv.config();

export const db = drizzle(process.env.DB_URL!);
