import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z
    .string()
    .refine((value) => /^\d{1,10},\d{2}$/.test(value), {
      message: "O valor deve estar no formato 1234567890,12.",
    })
    .transform((value) => parseFloat(value.replace(",", ".")))
    .default("0"),
  adressId: z.number().positive(),
  categoryId: z.number().positive(),
});

const createRealEstateSchema = realEstateSchema.omit({
  id: true,
});

export { realEstateSchema, createRealEstateSchema };
