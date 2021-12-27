/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-26
 */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() params) {
    const newParam = { ...params, status: 1 };
    await this.usersService.create(newParam);
    return true;
  }

  @Post('batchedCreate')
  async batchedCreate(@Body() { users }) {
    console.log(users, '-===>create')
    const newUsers = users.map((user) => ({ ...user, status: 1 }));
    await this.usersService.batchedCreate(newUsers);
    return true;
  }
}
