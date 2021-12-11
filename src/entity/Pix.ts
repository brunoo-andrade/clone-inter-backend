import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Pix {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAtDate: Date;

  @UpdateDateColumn()
  updatedAtDate: Date;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  requestingUser: User;

  @ManyToOne(() => User, user => user.id, { nullable: true })
  @JoinColumn()
  payingUser: User;
}
