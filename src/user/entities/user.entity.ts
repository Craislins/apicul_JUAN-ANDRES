import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  Address: string;
  @Column()
  PhoneNumber: string;
  @Column()
  Email: string;
  @Column({ default: true })
  isActive: boolean;
}
