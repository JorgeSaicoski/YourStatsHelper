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
  describe('findUserAndIncreaseVip', () => {
    it('should increase the vip', async () => {

      const days = 30
      const daysInMilliseconds = days * 24 * 60 * 60 * 1000
      const now = new Date
  
      const expectedUser = new User();
      expectedUser.expireVipIn = new Date
      expectedUser.expireVipIn.setDate(now.getDate() + daysInMilliseconds)

      mockUserRepository.create.mockReturnValue(expectedUser);
      mockUserRepository.save.mockReturnValue(expectedUser);
  
      const user = await userService.findUserAndIncreaseVip(expectedUser.id, days);
  
      expect(user.expireVipIn).toEqual(expectedUser.expireVipIn);
    });

    it('should increase the vip even he have id expired', async () => {

      const days = 30;
      const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
      const now = new Date();
    
      
      const expectedUser = new User();
      const expiredDate = new Date(now.getTime() - 1); 
      expectedUser.expireVipIn = expiredDate;
    
      mockUserRepository.create.mockReturnValue(expectedUser);
      mockUserRepository.save.mockReturnValue(expectedUser);
    
      
      const user = await userService.findUserAndIncreaseVip(expectedUser.id, days);
    
      
      const expectedVipExpiration = new Date(now.getTime() + daysInMilliseconds);
    
      
      expect(user.expireVipIn).toEqual(expectedVipExpiration);
    });
  });
});
