/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({ description: '姓名', required: true })
  @IsString()
  readonly name: string;

  @IsInt()
  @ApiProperty({ description: '年龄', required: true })
  readonly age: number;

  @IsString()
  @ApiProperty({ description: '喂养方式', required: false })
  readonly breed: string;
}

export class ResponseCatDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '姓名' })
  name: string;

  @ApiProperty({ description: '年龄' })
  age: number;

  @ApiProperty({ description: '喂养方式' })
  breed: string;
}
