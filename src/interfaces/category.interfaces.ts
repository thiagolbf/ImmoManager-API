import { z } from "zod";
import {
  createCategorySchema,
  readCategorySchema,
} from "../schemas/category.schema";

type CategoryRequest = z.infer<typeof createCategorySchema>;
type CategoryRead = z.infer<typeof readCategorySchema>;

export { CategoryRequest, CategoryRead };
