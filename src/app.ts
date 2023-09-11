import "express-async-errors";
import { handleErrors } from "./errors";

import express, { Application, json } from "express";

import userRouter from "./routers/user.router";
import loginRouter from "./routers/session.router";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);
app.use("/login", loginRouter);

app.use(handleErrors);
export default app;
