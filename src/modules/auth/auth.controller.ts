/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-26
 */

import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // local加密
  @Post('login')
  async login(@Request() req) {
    console.log(req.user, '===>login');
    return this.authService.generateToken(req.user);
  }

  @UseGuards(AuthGuard('jwt')) // jwt解密
  @Get('getUserInfo')
  async getUserInfo(@Request() req) {
    console.log(req.user, '===>getUserInfo');
    return req.user;
  }
}
