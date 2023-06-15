import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.schema'
import { UserDTO } from './user.dto'
import { Types } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async save(createCatDto: UserDTO): Promise<User> {
    try {
      const createdCat = new this.userModel(createCatDto)
      return await createdCat.save()
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async findAll(): Promise<User[]> {
    try {
      console.log('user all service')
      return await this.userModel.find().exec()
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async findOne(id: string): Promise<User> {
    console.log(id)
    try {
      if (!id.match(/^[0-9a-fA-F]{24}$/)) throw 'ObjectID invalid'
      const result = await this.userModel.findById(new Types.ObjectId(id)).exec()
      return result
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
