import "dotenv/config";

import { User } from "../entities";

import { SessionCreate, SessionReturn } from "../interfaces/session.interfaces";

import { AppError } from "../errors";

import userRepository from "../repositories/user.repository";

import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

export const createLoginService = async (
  payload: SessionCreate
): Promise<SessionReturn> => {
  const email = payload.email;
  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const checkPassword: boolean = await compare(
    payload.password,
    foundUser.password
  );

  if (!checkPassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    {
      subject: foundUser.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    }
  );

  return { token };
};
