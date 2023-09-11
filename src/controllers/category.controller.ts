import { Request, Response } from "express";

import {
  createCategoryService,
  readCategoryService,
} from "../services/category.services";

import {
  CategoryRead,
  CategoryRequest,
} from "../interfaces/category.interfaces";
import { Category } from "../entities";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category: Category = await createCategoryService(req.body);

  return res.status(201).json(category);
};

export const readCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: Category[] = await readCategoryService();

  return res.status(200).json(categories);
};
