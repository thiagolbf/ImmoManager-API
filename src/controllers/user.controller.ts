import { Request, Response } from "express";

import { createUserService } from "../services/user.services";

import {
  UserRequest,
  UserRead,
  UserUpdate,
} from "../interfaces/user.interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserRead = await createUserService(req.body);
  return res.status(201).json(user);
};
