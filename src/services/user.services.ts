import {
  UserRequest,
  UserRead,
  UserUpdate,
} from "../interfaces/user.interfaces";

import {
  userSchema,
  createUserSchema,
  updateUserSchema,
} from "../schemas/user.schema";

import { User } from "../entities";
import userRepository from "../repositories/user.repository";

export const createUserService = async (
  payload: UserRequest
): Promise<User> => {
  const user: User = userRepository.create(payload);

  await userRepository.save(user);

  return user;
};
