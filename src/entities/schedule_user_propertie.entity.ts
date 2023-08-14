import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { RealEstate } from "./real_estate.entity";

@Entity("schedules_users_properties")
export class ScheduleUserProperty {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (user) => user.scheduleUserProperty)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.scheduleUserProperty)
  realEstate: RealEstate;
}
