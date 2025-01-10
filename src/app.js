import express from "express";
import { config } from "./config.js";

import clients from "./modules/clients/router.js";

const app = express();

app.set("port", config.app.port);
app.use("/api/clients", clients);

export default app;
