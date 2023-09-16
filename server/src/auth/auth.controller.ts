import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() registerDto: Record<string, any>){
        const user: User = new User()
        user.name = registerDto.name
        user.email = registerDto.email
        user.username = registerDto.username
        user.password = registerDto.password
        return this.authService.register(user);
    }
}
