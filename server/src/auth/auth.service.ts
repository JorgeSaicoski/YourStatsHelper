import { Injectable, UnauthorizedException } from '@nestjs/common';
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
      if (comparePasswords(password, user.password)) {
        const payload = { sub: user.id, username: user.username, expireVipIn: user.expireVipIn };
        const access_token = await this.jwtService.signAsync(payload);
        return { "access_token": access_token };
      } else if (user){
        throw new UnauthorizedException('Invalid credentials');
      }
      throw new UnauthorizedException('User not found');
      
    } catch (err) {
      throw new UnauthorizedException('Invalid credentials');
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

