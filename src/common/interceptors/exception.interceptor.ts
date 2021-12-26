/**
 * Author:hong.rong
 * Desc:错误捕获拦截器
 * Date:2021-12-26
 */

import {
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        catchError(() =>
          throwError(new HttpException('New message', HttpStatus.BAD_GATEWAY)),
        ),
      );
  }
}
