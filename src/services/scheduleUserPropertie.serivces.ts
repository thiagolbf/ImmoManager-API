import { ScheduleUserRequest } from "../interfaces/scheduleUser.interfaces";

import { RealEstate, ScheduleUserProperty, User } from "../entities";

import scheduleUserPropertieRepository from "../repositories/scheduleUserPropertie.repository";
import userRepository from "../repositories/user.repository";

import { AppError } from "../errors";

export const readScheduleService = async (idMovel: number) => {
  const schedules = await scheduleUserPropertieRepository.find({
    where: {
      realEstate: { id: idMovel },
    },
  });

  return schedules;
};

export const createScheduleService = async (
  payload: ScheduleUserRequest,
  realEstate: RealEstate,
  userId: number
): Promise<ScheduleUserProperty> => {
  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  // const existingSchedule = await scheduleUserPropertieRepository
  //   .createQueryBuilder("schedule")
  //   .where("schedule.date = :date", { date: payload.date })
  //   .andWhere("schedule.hour = :hour", { hour: payload.hour })
  //   .andWhere("schedule.realEstate = :realEstate", {
  //     realEstateId: realEstate.id,
  //   })
  //   .getOne();

  const existingSchedule = await scheduleUserPropertieRepository.findOne({
    where: {
      date: payload.date,
      hour: payload.hour,
      realEstate: { id: realEstate.id },
    },
  });

  if (existingSchedule) {
    throw new AppError(
      "There is already a schedule for the same date and time",
      400
    );
  }

  const schedule: ScheduleUserProperty = scheduleUserPropertieRepository.create(
    {
      date: payload.date,
      hour: payload.hour,
      realEstate,
      user,
    }
  );

  await scheduleUserPropertieRepository.save(schedule);

  return schedule;
};
