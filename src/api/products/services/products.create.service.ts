import { products } from '../../../data/products'
import type { CreateProductDTO } from '../products.interfaces'

export const createProductService = (newProduct: CreateProductDTO) => {
	const id = products.length + 1
	const product = { id, ...newProduct }
	products.push(product)
	return product
}
