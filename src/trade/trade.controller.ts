import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { TradeService } from './trade.service'

@Controller('Trade')
export class TradeController {
  constructor(private readonly tradeService: TradeService) { }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.tradeService.findOne(id)
  }

  @Get('/all')
  findAll() {
    return this.tradeService.findAll()
  }

  @Post('/create')
  create(@Body() data: any) {
    return this.tradeService.save(data)
  }

  @Post('/update')
  update(@Body() data: any) {
    return this.tradeService.save(data)
  }
}
