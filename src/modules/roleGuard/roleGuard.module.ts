/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Module } from '@nestjs/common';
import { RoleGuardController } from './roleGuard.controller';
import { RoleGuardService } from './roleGuard.service';

@Module({
  imports: [],
  controllers: [RoleGuardController],
  providers: [RoleGuardService],
})
export class RoleGuardModule {}
