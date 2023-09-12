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
  ) {

  }
  async createUser(createUserDto: CreateUserDto):Promise<User | undefined> {
    const user: User = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.username = createUserDto.username
    user.password = createUserDto.password
    return await this.userRepository.save(user);
  }

  async findAllUsers():Promise<User [] | undefined> {
    return await this.userRepository.find();
  }

  async findUser(id: number):Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findUserByUsername(username: string):Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto):Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    })
    user.name = updateUserDto.name
    user.email = updateUserDto.email
    user.username = updateUserDto.username
    user.password = updateUserDto.password
    return await this.userRepository.save(user)
  }

  async removeUser(id: number) {
    return await this.userRepository.delete(id);
  }
}
