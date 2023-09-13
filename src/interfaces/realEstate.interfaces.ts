import { z } from "zod";
import { createRealEstateSchema } from "../schemas/realEstate.schema";

type RealEstateRequest = z.infer<typeof createRealEstateSchema>;

export { RealEstateRequest };
