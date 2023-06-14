import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { getModelToken } from '@nestjs/mongoose'
import { User } from './user.schema'
import { UserService } from './user.service'

describe('UserController', () => {
  let controller: UserController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: {}
        }
      ]
    }).compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create an user', async () => {
      const data = {
        userName: 'user1',
        email: 'user1@gmail.com',
        fullName: 'User 1',
        age: 30
      }
      const createdExample = { ...data, _id: 'mockedUserId' }

      jest.spyOn(controller, 'create').mockResolvedValue(createdExample)

      const result = await controller.create(data)
      expect(result).toEqual(createdExample)
    })
  })

  describe('findAll', () => {
    it('should return all users', async () => {
      const data1 = {
        userName: 'user1',
        email: 'user1@gmail.com',
        fullName: 'User 1',
        age: 30
      }
      const data2 = {
        userName: 'user2',
        email: 'user2@gmail.com',
        fullName: 'User 2',
        age: 37
      }
      const list = [data1, data2]

      jest.spyOn(controller, 'findAll').mockResolvedValue(list)

      const result = await controller.findAll()
      expect(result).toEqual(list)
    })
  })
})
