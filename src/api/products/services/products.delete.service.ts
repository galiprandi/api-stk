import { products } from '../../../data/products'

export const deleteProductService = async (id: number) => {
	// Buscar el producto por id
	const productIndex = products.findIndex((product) => product.id === id)

	// Si no se encuentra el producto, retornar 404
	if (productIndex === -1) throw new Error('Product not found')

	// Eliminar y retornar el producto
	return products.splice(productIndex, 1)[0]
}
