import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin: boolean = res.locals.decoded.admin;

  if (!admin) throw new AppError("Insufficient permissions", 403);

  next();
};
