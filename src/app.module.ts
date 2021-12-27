import { resolve } from 'path';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/roleGuard/roleGuard.module';
import { EmailModule } from './modules/email/email.module';
// import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AlbumModule } from './modules/album/album.module';
import { SchedulesModule } from './schedules/schedules.module';
// import { AudioModule } from './jobs/audio/audio.module';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService],
    }),
    // BullModule.registerQueueAsync({
    //   name: 'audio',
    //   useFactory: (config: ConfigService) => config.get('redis'),
    //   inject: [ConfigService],
    // }),
    // AudioModule,
    // ScheduleModule.forRoot(),
    // SchedulesModule,
    HelloModule,
    AuthModule,
    ExceptionModule,
    RoleGuardModule,
    EmailModule,
    // HealthModule,
    UsersModule,
    AlbumModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为hello路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
    //也可以通过如下方式指定包含中间件的请求方法
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });

    //也可以使用通配符来匹配路径，如以下示例
    //forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });

    // 通过以下方法来针对不同控制器使用中间件，也可以传递一个由逗号分隔的控制器列表
    //.forRoutes(CatsController);

    // 通过exclude和路径方法来排除特定路径
    //.exclude(
    //{ path: 'cats', method: RequestMethod.GET },
    //{ path: 'cats', method: RequestMethod.POST })
  }
}
