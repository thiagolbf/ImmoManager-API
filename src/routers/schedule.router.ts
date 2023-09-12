import { Router } from "express";

import { createScheduleUserSchema } from "../schemas/scheduleUser.schema";

import {
  createScheduleController,
  readScheduleController,
} from "../controllers/schedule.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyRealEstate } from "../middlewares/verifyRealEstate.middleware";
import { verifyRealEstateId } from "../middlewares/verifyRealEstateId.middleware";

const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  verifyToken,
  validateBody(createScheduleUserSchema),
  verifyRealEstateId,
  createScheduleController
);

scheduleRouter.get("/realEstate/:id", verifyRealEstate, readScheduleController);

export default scheduleRouter;
