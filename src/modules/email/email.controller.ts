/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/sendCode')
  async sendEmailCode(@Body() data) {
    return this.emailService.sendEmailCode(data);
  }
}
