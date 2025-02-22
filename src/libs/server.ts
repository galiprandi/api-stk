import cors from "cors";
import express from "express";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/health-check", (_req, res) => {
  res.json({ status: "ready", uptime: process.uptime() });
});

// Exportar el servidor para usarlo en index.ts
export { app };