import { Request, Response } from "express";

import {
  createRealEstateSErvice,
  readRealEstateService,
} from "../services/realEstate.services";
import { RealEstate } from "../entities";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateSErvice(
    req.body,
    res.locals.category
  );

  return res.status(201).json(realEstate);
};

export const readRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates: RealEstate[] = await readRealEstateService();

  return res.status(200).json(realEstates);
};
