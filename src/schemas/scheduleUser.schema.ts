import { z } from "zod";

// Expressão regular para validar horários entre 08:00 e 18:00
const timeRegex = /^(0[8-9]|1[0-8]):[0-5]\d$/;
const dateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const scheduleUserSchema = z.object({
  id: z.number().positive(),
  date: z.string().refine((value) => dateRegex.test(value), {
    message: "A data deve estar no formato AAAA-DD-MM",
  }),
  hour: z.string().refine((value) => timeRegex.test(value), {
    message: "O horário deve estar entre 08:00 e 18:00",
  }),
  realEstateId: z.number().positive(),
});

const createScheduleUserSchema = scheduleUserSchema.omit({ id: true });

export { scheduleUserSchema, createScheduleUserSchema };
