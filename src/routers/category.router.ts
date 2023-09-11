import { Router } from "express";

import {
  createCategoryController,
  readCategoryController,
} from "../controllers/category.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyCategoryName } from "../middlewares/verifyCategoryName.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";

import { createCategorySchema } from "../schemas/category.schema";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  verifyToken,
  verifyAdmin,
  validateBody(createCategorySchema),
  verifyCategoryName,
  createCategoryController
);

categoryRouter.get("", readCategoryController);

export default categoryRouter;
