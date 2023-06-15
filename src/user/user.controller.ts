import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/all')
  async findAll() {
    console.log('user all controller')
    return await this.userService.findAll()
  }
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id)
  }

  @Post('/create')
  async create(@Body() data: any) {
    return await this.userService.save(data)
  }

  @Post('/update')
  async update(@Body() data: any) {
    return await this.userService.save(data)
  }
}
