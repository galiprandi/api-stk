import request from 'supertest'
import { describe, expect, it } from 'vitest'
import { app } from '../libs/server'

describe('PUT /api/products/:id', () => {
	it('should update an existing product', async () => {
		const productId = 1
		const updatedProduct = {
			title: 'Updated Laptop',
			brand: 'Apple',
			category: 'Electronics',
			price: 1499.99,
			stock: 5,
		}

		const response = await request(app)
			.put(`/api/products/${productId}`)
			.send(updatedProduct)

		expect(response.status).toBe(200)
		expect(response.body).toMatchObject(updatedProduct)
	})

	it('should return 404 if product not found', async () => {
		const productId = 'invalid-id'
		const updatedProduct = {
			title: 'Updated Laptop',
			brand: 'Apple',
			category: 'Electronics',
			price: 1499.99,
			stock: 5,
		}

		const response = await request(app)
			.put(`/api/products/${productId}`)
			.send(updatedProduct)

		expect(response.status).toBe(404)
		expect(response.body).toMatchObject({ message: 'Product not found' })
	})
})
