import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";

import { User } from "../entities";
import userRepository from "../repositories/user.repository";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = parseInt(req.params.id);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) throw new AppError("User not found", 404);

  return next();
};
