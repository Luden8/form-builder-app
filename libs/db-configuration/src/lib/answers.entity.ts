import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Answer{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  @Column()
  userId: number

  @Column()
  stepId: number

  @ManyToOne(() => User, (user) => user.answers)
  user: User
}
