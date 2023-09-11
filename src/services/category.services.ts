import { Category } from "../entities";

import {
  CategoryRequest,
  CategoryRead,
} from "../interfaces/category.interfaces";

import categoryRepository from "../repositories/category.repository";

export const createCategoryService = async (
  payload: CategoryRequest
): Promise<Category> => {
  const category = categoryRepository.create(payload);

  await categoryRepository.save(category);

  return category;
};

export const readCategoryService = async (): Promise<CategoryRead> => {
  const categories = await categoryRepository.find();

  return categories;
};
