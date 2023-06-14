import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Trade } from './trade.schema'
import { TradeDTO } from './trade.dto'

@Injectable()
export class TradeService {
  constructor(@InjectModel(Trade.name) private TradeModel: Model<Trade>) {}

  async save(createDto: TradeDTO): Promise<Trade> {
    const createdCat = new this.TradeModel(createDto)
    return createdCat.save()
  }

  async findAll(): Promise<Trade[]> {
    return this.TradeModel.find().exec()
  }

  async findOne(id: string): Promise<Trade> {
    return this.TradeModel.findById(id).exec()
  }
}
