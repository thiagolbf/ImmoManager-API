import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
});

const createUserSchema = userSchema.omit({ id: true });

const updateUserSchema = userSchema.partial();

export { userSchema, createUserSchema, updateUserSchema };
