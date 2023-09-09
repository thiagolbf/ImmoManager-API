import { z } from "zod";
import {
  createUserSchema,
  userReturnSchema,
  userReadSchema,
} from "../schemas/user.schema";
import { User } from "../entities/user.entity";
import { DeepPartial, Repository } from "typeorm";

type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserUpdate = DeepPartial<UserRequest>;

export { UserRequest, UserRead, UserUpdate, UserReturn };
