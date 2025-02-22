import request from "supertest";
import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { app } from "../libs/server";

// ⚠️ Introducimos un error intencional en la prueba
describe("GET /api/products", () => {
  it("should return a list of products", async () => {
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(products);
  });
});