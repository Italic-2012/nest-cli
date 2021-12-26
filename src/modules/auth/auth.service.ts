/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-26
 */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // const user = await this.usersService.find(username);
    // todo: 数据库匹配用户名信息，取出用户名和用户id生成jwt
    const user = { username, userId: 1024 };
    if (user.username) {
      return user;
    }
    return null;
  }

  async generateToken(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
