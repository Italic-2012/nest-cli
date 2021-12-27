/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-26
 */

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository, getRepository } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    // relations: ['photos']， 联合查询
    return await this.userRepository.find({ relations: ['photos'] });

    // 或者使用queryBuilder
    // return await getRepository(UsersEntity)
    //   .createQueryBuilder("user")
    //   .leftJoinAndSelect("user.photos", "photo")
    //   .getMany()
  }

  async create(user): Promise<UsersEntity[]> {
    const { username } = user;
    const isNamed = await getRepository(UsersEntity).findOne({
      where: { username },
    });
    //   .createQueryBuilder('users')
    //   .where('users.username = :username', { username });
    // const u = await qb.getOne();
    if (isNamed) {
      throw new HttpException(
        {
          message: '插入失败',
          error: '用户名已存在',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.userRepository.save(user);
  }

  async batchedCreate(users: UsersEntity[]) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      for (const user of users) {
        await queryRunner.manager.getRepository(UsersEntity).save(user);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
