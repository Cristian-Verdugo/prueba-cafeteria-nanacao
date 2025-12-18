# Cafetería Nanacao — API y Pruebas

Proyecto de apoyo para practicar testing de una API REST con `Jest` y `Supertest`. La API expone rutas CRUD para cafés y un set de pruebas que validan su comportamiento.

## Requisitos
- Node.js 16+ y npm
- Dependencias: `express`, `jest`, `supertest`

## Instalación
```bash
npm install
```

## Pruebas
Ejecuta las pruebas unitarias:
```bash
npm test
```

## Servidor
Para iniciar el servidor en desarrollo:
```bash
node index.js
```

## Rutas
- `GET /cafes`
  - Retorna `200` con un arreglo de cafés (≥1 objeto).

- `GET /cafes/:id`
  - Retorna `200` con el café si existe, `404` si no existe.

- `POST /cafes`
  - Crea un café: body esperado `{ id, nombre }`.
  - Retorna `201` con el arreglo actualizado.
  - Retorna `400` si el `id` ya existe.

- `PUT /cafes/:id`
  - Actualiza un café: el `id` del parámetro debe coincidir con `id` del body.
  - Retorna `400` si difieren, `404` si no existe, `200` si actualiza.

- `DELETE /cafes/:id`
  - Requiere header `Authorization`.
  - Retorna `404` si el `id` no existe, `400` si falta el token, `200` si elimina.
  - Ejemplo de header: `Authorization: Bearer <token>`

## Estructura
- `index.js`: servidor Express y rutas.
- `cafes.json`: datos de ejemplo.
- `tests/server.spec.js`: pruebas con `Jest` + `Supertest`.
- `package.json`: scripts y dependencias.

## Notas
- Durante las pruebas puede aparecer el log `SERVER ON` del servidor exportado.
- El script de pruebas usa `jest --forceExit` para finalizar el runner.
