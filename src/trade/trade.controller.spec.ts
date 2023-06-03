import { Test, TestingModule } from '@nestjs/testing';
import { TradeController } from './trade.controller';

describe('ExampleController', () => {
  let controller: TradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeController],
    }).compile();

    controller = module.get<TradeController>(TradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a message for GET requests', () => {
      expect(controller.findAll()).toEqual({ message: 'GET method response' });
    });
  });

  describe('create', () => {
    it('should return a message with the provided data for POST requests', () => {
      const testData = { id: 1, name: 'Test' };
      expect(controller.create(testData)).toEqual({
        message: 'POST method response',
        data: testData,
      });
    });
  });
});
