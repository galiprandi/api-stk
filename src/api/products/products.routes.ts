import { Router } from 'express'
import { createProductController } from './controllers/products.create.controller'
import { deleteProductController } from './controllers/products.delete.controller'
import { getAllProductsController } from './controllers/products.get.all.controller'
import { updateProductController } from './controllers/products.update.controller'

export const productsRoutes = Router()

productsRoutes.get('/', getAllProductsController)
productsRoutes.post('/', createProductController)
productsRoutes.put('/:id', updateProductController)
productsRoutes.delete('/:id', deleteProductController)
