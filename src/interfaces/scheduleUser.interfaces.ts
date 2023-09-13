import { z } from "zod";
import { createScheduleUserSchema } from "../schemas/scheduleUser.schema";

type ScheduleUserRequest = z.infer<typeof createScheduleUserSchema>;

export { ScheduleUserRequest };
