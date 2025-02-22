import cors from "cors";
import express from "express";
import { productsRouter } from "../routes/products";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/health-check", (_req, res) => {
  res.json({ status: "ready", uptime: process.uptime() });
});

app.use("/api/products", productsRouter);

// Exportar el servidor para usarlo en index.ts
export { app };