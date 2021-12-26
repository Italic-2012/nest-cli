/**
 * Author:hong.rong
 * Desc:健康监控
 * Date:2021-12-26
 */

import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '132252',
    //   database: 'test',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   connectTimeout: 60 * 60 * 1000,
    //   acquireTimeout: 60 * 60 * 1000,
    // }),
    TerminusModule,
  ],
  controllers: [HealthController],
})
export class HealthModule {}
