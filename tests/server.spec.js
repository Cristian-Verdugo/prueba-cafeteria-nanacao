const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

  test("GET /cafes responde 200 y un arreglo con al menos 1 objeto", async () => {
    const res = await request(server).get("/cafes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(typeof res.body[0]).toBe("object");
  });

  test("DELETE /cafes/:id con id inexistente responde 404", async () => {
    const res = await request(server)
      .delete("/cafes/999")
      .set("Authorization", "Bearer token-falso");
    expect(res.statusCode).toBe(404);
  });

  test("POST /cafes agrega un nuevo café y responde 201", async () => {
    const nuevoCafe = { id: 99, nombre: "Latte" };
    const res = await request(server).post("/cafes").send(nuevoCafe);
    expect(res.statusCode).toBe(201);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((c) => c.id === nuevoCafe.id && c.nombre === nuevoCafe.nombre)).toBe(true);
  });

  test("PUT /cafes/:id responde 400 si el id del parámetro difiere del payload", async () => {
    const res = await request(server)
      .put("/cafes/1")
      .send({ id: 999, nombre: "Café Actualizado" });
    expect(res.statusCode).toBe(400);
  });
});
