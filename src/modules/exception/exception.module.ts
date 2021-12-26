/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';

@Module({
  imports: [],
  controllers: [ExceptionController],
  providers: [ExceptionService],
})
export class ExceptionModule {}
