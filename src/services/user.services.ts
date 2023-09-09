import {
  UserRequest,
  UserRead,
  UserUpdate,
  UserReturn,
} from "../interfaces/user.interfaces";

import { userReturnSchema } from "../schemas/user.schema";

import { User } from "../entities";
import userRepository from "../repositories/user.repository";

export const createUserService = async (
  payload: UserRequest
): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);

  await userRepository.save(user);

  return userReturnSchema.parse(user);
};
