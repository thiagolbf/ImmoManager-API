import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RealEstate } from "./real_estate.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;
}
