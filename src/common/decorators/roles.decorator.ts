/**
 * Author:hong.rong
 * Desc:角色装饰器
 * Date:2021-12-25
 */

import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
