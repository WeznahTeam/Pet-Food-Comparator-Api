import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import type { Options } from "swagger-jsdoc";
import type { Application } from "express";

const swaggerOptions: Options = {
  swaggerDefinition: {
    info: {
      title: "API",
      description: "API documentation",
      version: "0.0.1",
    },
    servers: [
      {
        url: "http://localhost:9999/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

export const initSwagger = (app: Application) => {
  app.use(
    "/api-docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDoc)
  );
};
