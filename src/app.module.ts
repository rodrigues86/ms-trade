import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/tradedb')]
})
export class AppModule {}
