import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return { message: 'GET method response' };
  }

  @Post()
  create(@Body() data: any) {
    return { message: 'POST method response', data };
  }
}
