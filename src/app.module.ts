import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { TradeModule } from './trade/trade.module'

@Module({
  imports: [UserModule, TradeModule, MongooseModule.forRoot('mongodb://localhost/tradedb')]
})
export class AppModule {}
