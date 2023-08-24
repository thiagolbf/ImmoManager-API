import { z } from "zod";
import { createUserSchema } from "../schemas/user.schema";
import { User } from "../entities/user.entity";
import { DeepPartial, Repository } from "typeorm";

type UserRequest = z.infer<typeof createUserSchema>;
type UserRead = Array<User>;
type UserUpdate = DeepPartial<UserRequest>;

export { UserRequest, UserRead, UserUpdate };
