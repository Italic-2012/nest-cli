/**
 * Author:hong.rong
 * Desc:
 * Date:2021-12-26
 */

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, ManyToMany } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.photos)
  user: UsersEntity;

  @Column({ type: 'varchar', length: 80 })
  url: string;
}
