import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from './answers.entity'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Answer, (anser) => anser.user)
  answers: Answer[]
}
