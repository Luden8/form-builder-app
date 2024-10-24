import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@form-builder-app/db-configuration';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id) {
    return await this.repo.findOne({
      where: {
        id
      }
    });
  }

  async create() {
    const newUser = new User();
    return this.repo.save(newUser);
  }

  async update(id: number, user: User) {
    return await this.repo.update(id, user);
  }

  async delete(id) {
    return await this.repo.delete(id);
  }
}
