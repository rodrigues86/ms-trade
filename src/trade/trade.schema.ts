import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TradeDocument = HydratedDocument<Trade>

@Schema()
export class Trade {
  @Prop({ required: true })
  stock: string

  @Prop({ required: true })
  strike: number

  @Prop({ required: true, type: String, enum: OptionType, default: OptionType.Call })
  optionType: OptionType

  @Prop({ required: true, type: String, enum: Operation, default: Operation.Buy })
  operation: Operation

  @Prop({ type: Date, required: true })
  dueDate: Date
}

export const UserSchema = SchemaFactory.createForClass(Trade)
