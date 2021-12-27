/**
 * Author:hong.rong
 * Desc:用户实体
 * Date:2021-12-26
 */

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhotoEntity } from '../photo/photo.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 20 })
  username: string;

  @Column('varchar')
  password: string;

  @Column()
  status: number;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: [];
}
