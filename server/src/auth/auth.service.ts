import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { comparePasswords } from '@utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }
  async signIn(username: string, password: string) {
    try {
      const user = await this.usersService.findUserByUsername(username);
      if (!user){
        throw new NotFoundException('User not found');
      }

      const isValidPassword: boolean = await comparePasswords(password, user.password);

      if (isValidPassword) {
        const payload = { sub: user.id, username: user.username, expireVipIn: user.expireVipIn };
        const access_token = await this.jwtService.signAsync(payload);
        return { "access_token": access_token };
      }

      throw new UnauthorizedException('Invalid password');
      
    } catch (err) {
      throw err;
    }
  }

  async register(user: CreateUserDto) {
    try {
      const newUser = await this.usersService.createUser(user);
      const payload = { sub: newUser.id, username: newUser.username, expireVipIn: newUser.expireVipIn };
      const access_token = await this.jwtService.signAsync(payload);

      return { access_token };
    } catch (err) {
      console.log(err)
      throw new UnauthorizedException('Registration failed');
    }
  }
}

