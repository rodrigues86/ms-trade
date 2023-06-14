import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { getModelToken } from '@nestjs/mongoose'
import { User } from './user.schema'

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: {}
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
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

      jest.spyOn(service, 'save').mockResolvedValue(createdExample)

      const result = await service.save(data)
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

      jest.spyOn(service, 'findAll').mockResolvedValue(list)

      const result = await service.findAll()
      expect(result).toEqual(list)
    })
  })
})
