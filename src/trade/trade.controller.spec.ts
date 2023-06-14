import { Test, TestingModule } from '@nestjs/testing'
import { TradeController } from './trade.controller'
import { TradeService } from './trade.service'
import { getModelToken } from '@nestjs/mongoose'
import { Option, Trade } from './trade.schema'
import { Operation, OptionType } from './../enum/enums'

describe('controller', () => {
  let controller: TradeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeController],
      providers: [
        TradeService,
        {
          provide: getModelToken(Trade.name),
          useValue: {}
        }
      ]
    }).compile()

    controller = module.get<TradeController>(TradeController)
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

      jest.spyOn(controller, 'create').mockResolvedValue(createdTest)

      const result = await controller.create(data)
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

      jest.spyOn(controller, 'findAll').mockResolvedValue(list)

      const result = await controller.findAll()
      expect(result).toEqual(list)
    })
  })
})
