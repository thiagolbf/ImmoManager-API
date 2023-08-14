import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { Adress } from "./adress.entity";
import { Category } from "./category.entity";
import { ScheduleUserProperty } from "./schedule_user_propertie.entity";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Adress)
  @JoinColumn()
  adress: Adress;

  @ManyToOne(() => Category)
  category: Category;

  @OneToMany(
    () => ScheduleUserProperty,
    (scheduleUser) => scheduleUser.realEstate
  )
  scheduleUserProperty: Array<ScheduleUserProperty>;
}
