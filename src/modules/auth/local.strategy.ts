/**
 * Author:hong.rong
 * Desc:登录接口鉴权策略
 * Date:2021-12-26
 */

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(username, password): Promise<any> {
    console.log(username, password, 'local strategy');
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException(
        { message: '授权失败', error: '请稍后重试.' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }
}
