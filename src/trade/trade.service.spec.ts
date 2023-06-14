import { Test, TestingModule } from '@nestjs/testing'
import { TradeService } from './trade.service'
import { getModelToken } from '@nestjs/mongoose'
import { Option, Trade } from './trade.schema'
import { Operation, OptionType } from './../enum/enums'

describe('TradeService', () => {
  let service: TradeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TradeService,
        {
          provide: getModelToken(Trade.name),
          useValue: {}
        }
      ]
    }).compile()

    service = module.get<TradeService>(TradeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should create an user', async () => {
      const option: Option = {
        quantity: 100,
        type: OptionType.PUT,
        price: 0.58,
        strike: 34.98,
        dueDate: new Date()
      }
      const data = {
        stock: 'PETR4',
        quantity: 100,
        price: 37.87,
        option,
        operation: Operation.BUY,
        createdAt: new Date()
      }
      const createdTest = { ...data, _id: 'mockedUserId' }

      jest.spyOn(service, 'save').mockResolvedValue(createdTest)

      const result = await service.save(data)
      expect(result).toEqual(createdTest)
    })
  })

  describe('findAll', () => {
    it('should return all users', async () => {
      const option: Option = {
        quantity: 100,
        type: OptionType.PUT,
        price: 0.58,
        strike: 34.98,
        dueDate: new Date()
      }
      const data1 = {
        stock: 'PETR4',
        quantity: 100,
        price: 37.87,
        option,
        operation: Operation.BUY,
        createdAt: new Date()
      }
      const data2 = {
        stock: 'PETR4',
        quantity: 100,
        price: 36.47,
        option,
        operation: Operation.SELL,
        createdAt: new Date()
      }
      const list = [data1, data2]

      jest.spyOn(service, 'findAll').mockResolvedValue(list)

      const result = await service.findAll()
      expect(result).toEqual(list)
    })
  })
})
