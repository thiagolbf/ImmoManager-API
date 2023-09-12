import { z } from "zod";
import {
  createRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realEstate.schema";

type RealEstateRequest = z.infer<typeof createRealEstateSchema>;
type ReturnRealEstate = z.infer<typeof returnRealEstateSchema>;

export { RealEstateRequest, ReturnRealEstate };
