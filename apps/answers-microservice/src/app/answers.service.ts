import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from '@form-builder-app/db-configuration';

@Injectable()
export class AnswersService {

  constructor(@InjectRepository(Answer) private readonly repo: Repository<Answer>) { }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id) {
    return await this.repo.findOne(id);
  }

  async create(answer: Answer) {
    return this.repo.create(answer);
  }

  async update(id: number, answer: Answer) {
    return await this.repo.update(id, answer);
  }

  async delete(id) {
    return await this.repo.delete(id);
  }
}
