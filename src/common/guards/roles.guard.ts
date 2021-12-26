/**
 * Author:hong.rong
 * Desc:角色验证守卫，可以参照做一个校验token的守卫
 * Date:2021-12-25
 */

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const { user } = request.query;

    // const hasRole = () =>
    //   user.roles.some(role => !!roles.find(item => item === role));

    // return user && user.roles && hasRole();
    return !!roles.find((role) => role === user);
  }
}
