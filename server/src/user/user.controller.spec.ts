import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [
        // Import the TypeOrmModule with the entities and repository
        TypeOrmModule.forRoot({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "admin",
          password: "85hvP5npPj2fi4",
          database: "statshelper",
          entities: [User], // Add your entity here
          synchronize: true, // Should be true for testing (make sure to change for production)
        }),
        TypeOrmModule.forFeature([User]), // Add your entity here as well
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
