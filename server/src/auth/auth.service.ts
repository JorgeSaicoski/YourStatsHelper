import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '@user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }
  async signIn(username: string, password: string) {
    try {
      const user = await this.usersService.findUserByUsername(username);
      if (!user || user.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { sub: user.id, username: user.username, expireVipIn: user.expireVipIn };
      const access_token = await this.jwtService.signAsync(payload);
      return { "access_token": access_token };
    } catch (err) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async register(user: User) {
    try {
      user = await this.usersService.createUser(user);
      const payload = { sub: user.id, username: user.username, expireVipIn: user.expireVipIn };
      const access_token = await this.jwtService.signAsync(payload);

      return { access_token };
    } catch (err) {
      console.log(err)
      throw new UnauthorizedException('Registration failed');
    }
  }
}

