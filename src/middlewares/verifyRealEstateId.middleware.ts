import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";

import { RealEstate } from "../entities";
import realEstateRepository from "../repositories/realEstate.repository";

export const verifyRealEstateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const realEstateId = parseInt(req.body.realEstateId);

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, realEstate };

  return next();
};
