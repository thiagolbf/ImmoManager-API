import { z } from "zod";
import { createScheduleUserSchema } from "../schemas/scheduleUser.schema";
import { ScheduleUserProperty } from "../entities/schedule_user_propertie.entity";

type ScheduleUserRequest = z.infer<typeof createScheduleUserSchema>;
type ScheduleUserRead = Array<ScheduleUserProperty>;

export { ScheduleUserRequest, ScheduleUserRead };
