import { Router } from "express";

import { createRealEstateSchema } from "../schemas/realEstate.schema";

import { createRealEstateController } from "../controllers/realEstate.controller";
import { readRealEstateController } from "../controllers/realEstate.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyCategoryId } from "../middlewares/verifyCategoryId.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  verifyToken,
  verifyAdmin,
  validateBody(createRealEstateSchema),
  verifyCategoryId,
  createRealEstateController
);

realEstateRouter.get("", readRealEstateController);

export default realEstateRouter;
