import express from "express";
import { config } from "./modules/config.js";
const app = express();

app.use(express.json());

import { router as infoRouter } from "./router/info.js";

app.use("/api/info", infoRouter);
app.use("", express.static("public"));

app.listen(config.port);

console.log("Server started!");
