import { Router } from "express";

import { validateBody } from "../middlewares/validateBody.middleware";
import { VerifyUserEmail } from "../middlewares/verifyUserEmail.middleware";

import { createUserSchema } from "../schemas/user.schema";

import { createUserController } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(createUserSchema),
  VerifyUserEmail,
  createUserController
);

export default userRouter;
