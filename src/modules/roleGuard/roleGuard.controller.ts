/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RoleGuardService } from './roleGuard.service';

@ApiBearerAuth()
@ApiTags('路由守卫')
@UseGuards(RolesGuard)
@Controller('roleGuard')
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  // 查询
  @Get()
  @Roles('admin')
  fetch(@Query() { id }): string {
    return this.roleGuardService.fetch(id);
  }
}
