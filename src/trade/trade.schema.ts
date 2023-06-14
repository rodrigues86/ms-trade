import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { OptionType, Operation } from './../enum/enums'

export type TradeDocument = HydratedDocument<Trade>

export class Option {
  @Prop({ required: true })
  quantity: number

  @Prop({ required: true })
  strike: number

  @Prop({ required: true })
  price: number

  @Prop({ required: true, type: String, enum: OptionType, default: OptionType.CALL })
  type: OptionType

  @Prop({ type: Date, required: true })
  dueDate: Date
}

@Schema()
export class Trade {
  @Prop({ required: true })
  stock: string

  @Prop({ required: true })
  quantity: number

  @Prop({ required: true })
  price: number

  @Prop({ required: false })
  option: Option

  @Prop({ required: true, type: String, enum: Operation, default: Operation.BUY })
  operation: Operation

  @Prop({ type: Date, required: true })
  createdAt: Date
}

export const TradeSchema = SchemaFactory.createForClass(Trade)
