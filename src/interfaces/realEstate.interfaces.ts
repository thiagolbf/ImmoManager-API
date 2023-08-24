import { z } from "zod";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { RealEstate } from "../entities/real_estate.entity";

type RealEstateRequest = z.infer<typeof createRealEstateSchema>;
type RealEstateRead = Array<RealEstate>;

export { RealEstateRequest, RealEstateRead };
