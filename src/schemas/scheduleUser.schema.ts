import { z } from "zod";

// Expressão regular para validar horários entre 08:00 e 18:00
const timeRegex = /^(0[8-9]|1[0-8]):[0-5]\d$/;

const scheduleUserSchema = z.object({
  id: z.number().positive(),
  date: z.date(),
  hour: z.string().refine((value) => timeRegex.test(value), {
    message: "O horário deve estar entre 08:00 e 18:00",
  }),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const createScheduleUserSchema = scheduleUserSchema.omit({ id: true });

export { scheduleUserSchema, createScheduleUserSchema };
