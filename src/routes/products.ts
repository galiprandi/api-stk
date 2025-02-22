import { Router } from "express";
import { products } from "../data/products";

const router = Router();

router.get("/", (_req, res) => {
    res.json(products);
});

router.post("/", (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

export { router as productsRouter };