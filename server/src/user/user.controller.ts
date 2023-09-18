import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IncreaseVipDTO } from './dto/increase-vip.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Patch('vip/:id')
  vip(@Param('id') id: number, @Body() increaseVipDTO: IncreaseVipDTO) {
    return this.userService.findUserAndIncreaseVip(+id, increaseVipDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.removeUser(+id);
  }
}
