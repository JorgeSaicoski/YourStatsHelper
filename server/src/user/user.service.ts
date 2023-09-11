import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){

  }
  createUser(createUserDto: CreateUserDto) {
    const user:User = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.username = createUserDto.username
    user.password = createUserDto.password
    return this.userRepository.save(user);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  findUser(id: number) {
    return this.userRepository.query(`'SELECT * FROM "users" WHERE id = ${id}'`);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.query(`'SELECT * FROM "users" WHERE id = ${id}'`)
    user.name = updateUserDto.name
    user.email = updateUserDto.email
    user.username = updateUserDto.username
    user.password = updateUserDto.password
    return this.userRepository.save(user)
  }

  removeUser(id: number) {
    return this.userRepository.delete(id);
  }
}
