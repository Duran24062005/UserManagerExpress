## Documentación en SWAGGER

documentar UNA API en **Swagger** (OpenAPI) con **Express** es una excelente práctica.
Te explico paso a paso cómo hacerlo desde cero, con ejemplos reales y opciones de personalización.

---

## 🧩 1. Instalar las dependencias necesarias

Ejecuta en tu proyecto:

```bash
npm install swagger-jsdoc swagger-ui-express
```

Estas dos librerías hacen todo el trabajo:

* **swagger-jsdoc** → genera la especificación OpenAPI a partir de comentarios o archivos de configuración.
* **swagger-ui-express** → sirve la interfaz visual de Swagger UI dentro de tu app Express.

---

## 📁 2. Estructura de ejemplo del proyecto

Supongamos esta estructura básica:

```
project/
│
├─ routes/
│   └─ users.routes.js
│
├─ app.js
└─ package.json
```

---

## ⚙️ 3. Configurar Swagger en `app.js`

Agrega esto en tu archivo principal (por ejemplo, `app.js` o `server.js`):

```js
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userRouter from './routes/users.routes.js';

const app = express();

// --- Configuración Swagger ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Documentación de la API usando Swagger en Express',
      contact: {
        name: 'Alexi Dg',
        email: 'alexidg@example.com'
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ],
  },
  apis: ['./routes/*.js'], // Archivos donde están tus rutas documentadas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Ruta de documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares y rutas
app.use(express.json());
app.use('/users', userRouter);

const port = 3000;
app.listen(port, () => console.log(`🚀 Servidor corriendo en http://localhost:${port}/api-docs`));
```

---

## ✍️ 4. Documentar las rutas

En tu archivo `routes/users.routes.js`, agrega comentarios tipo **JSDoc con formato Swagger**:

```js
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Juan Pérez
 */
router.get('/', (req, res) => {
  res.json([{ id: 1, nombre: 'Juan Pérez' }]);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: María Gómez
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post('/', (req, res) => {
  const { nombre } = req.body;
  res.status(201).json({ id: 2, nombre });
});

export default router;
```

---

## 🌐 5. Visualizar la documentación

Ejecuta tu servidor y visita:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

Verás una interfaz interactiva donde puedes probar tus endpoints directamente desde Swagger UI.

---

## 💡 Tip extra

Si quieres mantener la documentación en un archivo separado (por ejemplo `swagger.json` o `swagger.yaml`), puedes hacerlo y cargarlo así:

```js
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

---
