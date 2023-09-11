import { Request, Response } from "express";

import {
  createUserService,
  readUsersService,
  updateUserService,
  softDeleteUserService,
} from "../services/user.services";

import { UserRead, UserReturn } from "../interfaces/user.interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await createUserService(req.body);
  return res.status(201).json(user);
};

export const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: UserRead = await readUsersService();

  return res.status(200).json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userUpdated: UserReturn = await updateUserService(
    parseInt(req.params.id),
    req.body
  );

  return res.status(200).json(userUpdated);
};

export const softDeleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await softDeleteUserService(parseInt(req.params.id));

  return res.status(204).json();
};
