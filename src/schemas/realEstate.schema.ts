import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z
    .string()
    .refine((value) => /^\d{1,10},\d{2}$/.test(value), {
      message: "O valor deve estar no formato 1234567890,12.",
    })
    .transform((value) => parseFloat(value.replace(",", ".")))
    .default("0"),
  size: z.number().positive(),
  adress: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().int().max(9999),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number().positive().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export { realEstateSchema, createRealEstateSchema };
