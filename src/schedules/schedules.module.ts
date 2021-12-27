/**
 * Author:hong.rong
 * Desc:定时任务
 * Date:2021-12-26
 */

import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Module({
  providers: [SchedulesService],
})
export class SchedulesModule {}
