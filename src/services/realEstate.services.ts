import {
  RealEstateRequest,
  ReturnRealEstate,
} from "../interfaces/realEstate.interfaces";

import { Category, RealEstate } from "../entities";
import { Adress } from "../entities";

import adressRepository from "../repositories/adress.repository";
import realEstateRepository from "../repositories/realEstate.repository";

import { AppError } from "../errors";

export const createRealEstateSErvice = async (
  payload: RealEstateRequest,
  category: Category
): Promise<RealEstate> => {
  const checkAdress: Adress | null = await adressRepository.findOneBy({
    number: payload.adress.number,
    state: payload.adress.state,
    zipCode: payload.adress.zipCode,
  });

  if (checkAdress) throw new AppError("já cadastrado esse endereço", 409);

  const adress: Adress = adressRepository.create(payload.adress);

  await adressRepository.save(adress);

  if (category) {
    const realEstate: RealEstate = realEstateRepository.create({
      size: payload.size,
      value: payload.value,
      adress,
      category,
    });

    await realEstateRepository.save(realEstate);

    return realEstate;
  } else {
    const realEstate: RealEstate = realEstateRepository.create({
      size: payload.size,
      value: payload.value,
      adress,
    });

    await realEstateRepository.save(realEstate);

    return realEstate;
  }
};

export const readRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstates = await realEstateRepository.find({
    relations: {
      adress: true,
      category: true,
    },
  });

  return realEstates;
};
