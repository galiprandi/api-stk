// Interface para el objeto Producto
export type ProductDTO = {
	id: number
	title: string
	brand: string
	category: string
	price: number
	stock: number
}

// Interface para crear un nuevo producto
export type CreateProductDTO = Omit<ProductDTO, 'id'>

// Interface para actualizar un producto existente
export type UpdateProductDTO = Partial<ProductDTO>
