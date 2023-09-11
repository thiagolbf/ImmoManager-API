import "express-async-errors";
import { handleErrors } from "./errors";

import express, { Application, json } from "express";

import loginRouter from "./routers/session.router";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoryRouter);

app.use(handleErrors);
export default app;
