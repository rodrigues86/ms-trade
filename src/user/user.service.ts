import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.schema'
import { UserDTO } from './user.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async save(createCatDto: UserDTO): Promise<User> {
    const createdCat = new this.userModel(createCatDto)
    return createdCat.save()
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec()
  }
}
