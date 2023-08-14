import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("adresses")
export class Adress {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ type: "integer" })
  number: number;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
