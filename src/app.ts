import "express-async-errors";
import { handleErrors } from "./errors";

import express, { Application, json } from "express";

const app: Application = express();
app.use(json());

app.use(handleErrors);
export default app;
