import { products } from '../../../data/products'
import type { ProductDTO } from '../products.interfaces'

export const updateProductService = async (id: number, product: ProductDTO) => {
	// Buscar el producto por id
	const productIndex = products.findIndex((product) => product.id === id)

	// Si no se encuentra el producto, retornar 404
	if (productIndex === -1) throw new Error('Product not found')

	// Actualizar y retornar el producto
	products[productIndex] = { ...products[productIndex], ...product }
	return products[productIndex]
}
