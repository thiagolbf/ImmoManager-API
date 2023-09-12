import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";

import { Category } from "../entities";
import categoryRepository from "../repositories/category.repository";

export const verifyCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryId = parseInt(req.body.categoryId);

  if (!categoryId) {
    return next();
  }

  const category: Category | null = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!category) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, category };

  return next();
};
