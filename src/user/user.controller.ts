import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @Get('/all')
  findAll() {
    return this.userService.findAll()
  }

  @Post('/create')
  create(@Body() data: any) {
    return this.userService.save(data)
  }

  @Post('/update')
  update(@Body() data: any) {
    return this.userService.save(data)
  }
}
