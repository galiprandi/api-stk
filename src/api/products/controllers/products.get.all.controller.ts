import type { Request, Response } from 'express'
import { getAllProductsService } from '../services/products.get.all.service'

export const getAllProductsController = (_req: Request, res: Response) => {
	const allProducts = getAllProductsService()
	res.json(allProducts)
}
