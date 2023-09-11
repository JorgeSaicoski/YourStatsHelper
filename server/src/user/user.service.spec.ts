import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const mockUserRepository = {
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
};

const userRepositoryToken = getRepositoryToken(User);

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: userRepositoryToken,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const createUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
        username: 'johndoe',
        password: 'password123',
      };
  
      const expectedUser = new User();
      expectedUser.name = createUserDto.name;
      expectedUser.email = createUserDto.email;
      expectedUser.username = createUserDto.username;
      expectedUser.password = createUserDto.password;
  
      mockUserRepository.create.mockReturnValue(expectedUser);
      mockUserRepository.save.mockReturnValue(expectedUser);
  
      const user = await userService.createUser(createUserDto);
  
      expect(user).toEqual(expectedUser);
    });
  });
});
