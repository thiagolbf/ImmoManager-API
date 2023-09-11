import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;

  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token = authorization.split(" ")[1];

  // res.locals = {
  //   ...res.locals,
  //   decoded: verify(token, process.env.SECRET_KEY!),
  // };

  verify(token, process.env.SECRET_KEY!, (err, decoded) => {
    if (err) {
      throw new AppError(err.message, 401);
    }
    res.locals = { ...res.locals, decoded };
  });

  return next();
};
