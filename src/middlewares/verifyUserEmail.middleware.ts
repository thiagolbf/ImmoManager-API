import { NextFunction, Request, Response } from "express";
import userRepository from "../repositories/user.repository";
import { AppError } from "../errors";

export const VerifyUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  if (!email) {
    return next();
  }

  const emailExists: boolean = await userRepository.exist({ where: { email } });

  if (emailExists) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
