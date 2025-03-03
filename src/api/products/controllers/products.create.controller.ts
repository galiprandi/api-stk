import type { Request, Response } from 'express'
import { createProductService } from '../services/products.create.service'

export const createProductController = (req: Request, res: Response) => {
	const newProduct = req.body
	const product = createProductService(newProduct)
	res.status(201).json(product)
}
