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
    })
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


  async findUserAndIncreaseVip(id: number, days:any):Promise<User | undefined> {


    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    })

    const now:Date = new Date()
    const daysInMilliseconds: number = days.days * 24 * 60 * 60 * 1000
    let vipExpiration: Date;
    vipExpiration = new Date();

    
    console.log("vipExpiration")
    console.log(vipExpiration)

    console.log(now)

    if (vipExpiration && vipExpiration > now){
      console.log("1")
      vipExpiration.setDate(vipExpiration.getDate()+days.days)
      console.log(vipExpiration)
    } else {
      console.log("2")
      console.log(now.getDate() + days.days)
      vipExpiration.setDate(now.getDate()+ days.days)
      console.log(vipExpiration)
    }
    const day = vipExpiration.getDay()
    const month = vipExpiration.getMonth()+1
    const year = vipExpiration.getFullYear()
    console.log(`${year}-${month}-${day}`)
    user.expireVipIn = `${year}-${month}-${day}`
    console.log(user)
    return await this.userRepository.save(user)
  }

}
