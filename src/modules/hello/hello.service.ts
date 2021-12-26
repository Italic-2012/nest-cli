/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-25
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): string {
    return `Hello World! ${id}`;
  }

  save(params): string {
    return `Set Hello Done. name: ${params.name}, age: ${params.age}, breed: ${params.breed}`;
  }

  update(id, params): string {
    return `Update Hello Done. id: ${id}, name: ${params.name}, age: ${params.age}, breed: ${params.breed}`;
  }

  remove(id): string {
    return `${id} Record Was Removed.`;
  }
}
