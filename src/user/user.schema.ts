import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true })
  userName: string

  @Prop({ required: true })
  fullName: string

  @Prop({ required: true })
  age: number

  @Prop({ required: true })
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
