import "express-async-errors";
import { handleErrors } from "./errors";

import express, { Application, json } from "express";

import userRouter from "./routers/user.router";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);

app.use(handleErrors);
export default app;
