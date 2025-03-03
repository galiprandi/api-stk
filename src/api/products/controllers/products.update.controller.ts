import type { Request, Response } from 'express'
import { updateProductService } from '../services/products.update.service'

export const updateProductController = async (req: Request, res: Response) => {
	try {
		const productId = Number.parseInt(req.params.id)
		const updatedProduct = req.body
		const product = await updateProductService(productId, updatedProduct)
		res.json(product)
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ message: error.message })
		else res.status(404).json({ message: 'Unknown error' })
	}
}
