import { Router } from "express";

import { validateBody } from "../middlewares/validateBody.middleware";

import { createUserSchema } from "../schemas/user.schema";

import { createUserController } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("", validateBody(createUserSchema), createUserController);

export default userRouter;
