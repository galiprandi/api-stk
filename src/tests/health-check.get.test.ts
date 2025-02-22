import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../libs/server";

describe("GET /api/health-check", () => {
  it("should return { status: 'ready' }", async () => {
    const response = await request(app).get("/api/health-check");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "ready");
  });
});