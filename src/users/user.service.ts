
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: number) {
    return await this.userRepository.findByPk(id);
  }

}