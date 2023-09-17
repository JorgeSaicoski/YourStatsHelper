import {  IsString, MinLength, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2, {message: "Name must have at least 2 characters."})
    name: string;

    @IsString()
    @MinLength(2, {message: "Username must have at least 2 characters."})
    username: string;

    @IsEmail(null, {message: "Please, provide a valid Email"})
    @IsNotEmpty()
    email:string;

    @IsString()
    @MinLength(6, {message: "Password must have at least 6 characters."})
    password: string;


}
