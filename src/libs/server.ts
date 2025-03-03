import cors from 'cors'
import express from 'express'
import pinoHttp from 'pino-http'
import { productsRouter } from '../routes/products'
import { logger } from './logger'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(pinoHttp({ logger }))

// Rutas
app.get('/api/health-check', (_req, res) => {
	res.json({ status: 'ready', uptime: process.uptime() })
})

app.use('/api/products', productsRouter)

// Exportar el servidor para usarlo en index.ts
export { app }
