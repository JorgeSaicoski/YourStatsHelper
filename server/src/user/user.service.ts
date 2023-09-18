import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IncreaseVipDTO } from './dto/increase-vip.dto';
import { convertDateToString, convertStringToDate } from './helpers/convertData';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {

  }
  async createUser(createUserDto: CreateUserDto): Promise<User | undefined> {
    const user: User = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.username = createUserDto.username
    user.password = createUserDto.password
    return await this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[] | undefined> {
    return await this.userRepository.find();
  }

  async findUser(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    })
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
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


  async findUserAndIncreaseVip(id, body: any): Promise<User | undefined> {



    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    })
    console.log(user)

    const days = body.body.days


    const now: Date = new Date()


    let vipExpiration: Date = user.expireVipIn ? convertStringToDate(user.expireVipIn) : new Date();
    console.log(vipExpiration, "vip exp")

    if (vipExpiration && vipExpiration > now) {
      console.log(typeof vipExpiration)
      vipExpiration.setDate(vipExpiration.getDate() + days)
      console.log(vipExpiration)
    } else {
      console.log(typeof vipExpiration)
      vipExpiration.setDate(now.getDate() + days)
      console.log(vipExpiration)
    }


    user.expireVipIn = convertDateToString(vipExpiration)
    console.log(user)
    return await this.userRepository.save(user)
  }

}
