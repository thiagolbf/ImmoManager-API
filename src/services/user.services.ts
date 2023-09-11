import {
  UserRequest,
  UserRead,
  UserUpdate,
  UserReturn,
} from "../interfaces/user.interfaces";

import { userReadSchema, userReturnSchema } from "../schemas/user.schema";

import { User } from "../entities";
import userRepository from "../repositories/user.repository";

export const createUserService = async (
  payload: UserRequest
): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);

  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

export const readUsersService = async (): Promise<UserRead> => {
  const users = await userRepository.find();

  return userReadSchema.parse(users);
};

export const updateUserService = async (
  userId: number,
  payload: UserUpdate
): Promise<UserReturn> => {
  const user: User | null = await userRepository.findOneBy({ id: userId });

  const updated = await userRepository.save({ ...user, ...payload });
  return userReturnSchema.parse(updated);
};
