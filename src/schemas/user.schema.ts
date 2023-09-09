import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const updateUserSchema = userSchema.partial();

const userReturnSchema = userSchema.omit({ password: true });

const userReadSchema = userReturnSchema.array();

export {
  userSchema,
  createUserSchema,
  updateUserSchema,
  userReturnSchema,
  userReadSchema,
};
