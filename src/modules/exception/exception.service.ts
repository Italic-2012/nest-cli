/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {
  fetch(id): string {
    return `Hello World! ${id}`;
  }

  save(message): string {
    return `Set Hello Done.${message}`;
  }

  update(id: string, message: string): string {
    return `Update Hello Done. ${id}：${message}`;
  }

  remove(id: number): string {
    return `${id} Record Was Removed.`;
  }
}
