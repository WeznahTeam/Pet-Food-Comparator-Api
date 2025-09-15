import express from "express";
import { initSwagger } from "./swagger.js";
import router from "./routes/router.js";

const app = express();

initSwagger(app);
app.use("/", express.json());
app.use("/api", router);

app.listen(9999, () => {
  console.log("Server initialize in http://localhost:9999/api-docs");
});
