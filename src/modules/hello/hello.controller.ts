/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiHeader,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { CreateCatDto, ResponseCatDto } from './dto/createHello.dto';

@ApiBearerAuth()
@ApiTags('打招呼')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
  @ApiQuery({ name: 'id', required: true, description: '用户id', example: 123 })
  @ApiHeader({
    name: 'token',
    required: true,
    description: '用户token',
  })
  @ApiResponse({
    status: 200,
    type: ResponseCatDto,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

  // 创建
  @Post()
  @ApiBody({ type: CreateCatDto })
  @ApiResponse({
    status: 200,
    type: ResponseCatDto,
  })
  save(@Body() params: CreateCatDto): string {
    return this.helloService.save(params);
  }

  // 更新
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: CreateCatDto })
  @ApiResponse({
    status: 200,
    type: ResponseCatDto,
  })
  update(@Param() { id }, @Body() params: CreateCatDto): string {
    return this.helloService.update(id, params);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
