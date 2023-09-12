import "express-async-errors";
import { handleErrors } from "./errors";

import express, { Application, json } from "express";

import loginRouter from "./routers/session.router";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import realEstateRouter from "./routers/realEstate.router";
import scheduleRouter from "./routers/schedule.router";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);

app.use(handleErrors);
export default app;
