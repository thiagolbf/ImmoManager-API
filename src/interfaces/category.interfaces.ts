import { z } from "zod";
import { createCategorySchema } from "../schemas/category.schema";
import { Category } from "../entities/category.entity";

type CategoryRequest = z.infer<typeof createCategorySchema>;
type CategoryRead = Array<Category>;

export { CategoryRequest, CategoryRead };
