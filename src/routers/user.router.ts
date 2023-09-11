import { Router } from "express";

import { validateBody } from "../middlewares/validateBody.middleware";
import { VerifyUserEmail } from "../middlewares/verifyUserEmail.middleware";

import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

import {
  createUserController,
  readUsersController,
  updateUserController,
} from "../controllers/user.controller";

import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyUserId } from "../middlewares/verifyId.middleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(createUserSchema),
  VerifyUserEmail,
  createUserController
);

userRouter.get("", verifyToken, verifyAdmin, readUsersController);

userRouter.patch(
  "/:id",
  verifyUserId,
  validateBody(updateUserSchema),
  VerifyUserEmail,
  verifyToken,
  verifyUserPermission,
  updateUserController
);

export default userRouter;
