import { Router } from 'express'
import { products } from '../data/products'

const router = Router()

router.get('/', (_req, res) => {
	res.json(products)
})

router.post('/', (req, res) => {
	const newProduct = req.body
	newProduct.id = products.length + 1
	products.push(newProduct)
	res.status(201).json(newProduct)
})

router.put('/:id', (req, res) => {
	const productId = Number.parseInt(req.params.id)
	const updatedProduct = req.body
	const productIndex = products.findIndex((product) => product.id === productId)

	// If product is not found, return 404
	if (productIndex === -1)
		res.status(404).json({ message: 'Product not found' })

	// Update the product
	products[productIndex] = { ...products[productIndex], ...updatedProduct }
	res.json(products[productIndex])
})

router.delete('/:id', (req, res) => {
	const productId = Number.parseInt(req.params.id)
	const productIndex = products.findIndex((product) => product.id === productId)

	// If product is not found, return 404
	if (productIndex === -1)
		res.status(404).json({ message: 'Product not found' })

	// Delete the product
	products.splice(productIndex, 1)
	res.status(200).json({ message: 'Product deleted' })
})

export { router as productsRouter }
