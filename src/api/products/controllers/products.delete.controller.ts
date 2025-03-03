import type { Request, Response } from 'express'
import { deleteProductService } from '../services/products.delete.service'

export const deleteProductController = async (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id)
		const product = await deleteProductService(id)
		res.json({ message: 'Product deleted', product })
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ message: error.message })
		else res.status(404).json({ message: 'Unknown error' })
	}
}
