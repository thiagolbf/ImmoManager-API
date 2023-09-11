import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const verifyUserPermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const { sub, admin } = res.locals.decoded;

  if (admin) return next();

  if (userId !== sub) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
