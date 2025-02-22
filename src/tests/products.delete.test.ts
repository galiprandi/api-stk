import request from "supertest";
import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { app } from "../libs/server";

describe("DELETE /api/products/:id", () => {
    it("should delete an existing product", async () => {
        const productId = 1;
        const response = await request(app).delete(`/api/products/${productId}`);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({ message: "Product deleted" });
        expect(products.some(product => product.id === productId)).toBe(false);
    });

    it("should return 404 if product not found", async () => {
        const productId = 'invalid-id';
        const response = await request(app).delete(`/api/products/${productId}`);

        expect(response.status).toBe(404);
        expect(response.body).toMatchObject({ message: "Product not found" });
    });
});