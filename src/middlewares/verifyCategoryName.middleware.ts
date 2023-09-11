import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";

import { Category } from "../entities";
import categoryRepository from "../repositories/category.repository";

export const verifyCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryName = req.body.name;

  const category: Category | null = await categoryRepository.findOneBy({
    name: categoryName,
  });

  if (categoryName === category?.name)
    throw new AppError("Category name already exists", 404);

  return next();
};
