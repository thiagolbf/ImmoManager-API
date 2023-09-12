import { Request, Response } from "express";

import {
  createScheduleService,
  readScheduleService,
} from "../services/scheduleUserPropertie.serivces";

import { ScheduleUserProperty } from "../entities";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedule: ScheduleUserProperty = await createScheduleService(
    req.body,
    res.locals.realEstate,
    res.locals.decode?.sub
  );

  return res.status(201).json(schedule);
};

export const readScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedules = await readScheduleService(parseInt(req.params.id));

  if (schedules.length === 0) {
    return res
      .status(200)
      .json({ message: "There isn't a schedule for this immobile" });
  }

  return res.status(200).json(schedules);
};
