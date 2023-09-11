import { z } from "zod";
import {
  createUserSchema,
  userReturnSchema,
  userReadSchema,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";
import { User } from "../entities";

type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserUpdate = DeepPartial<User>;

export { UserRequest, UserRead, UserUpdate, UserReturn };
