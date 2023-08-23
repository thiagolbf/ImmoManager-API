import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const createCategorySchema = categorySchema.omit({ id: true });

export { categorySchema, createCategorySchema };
