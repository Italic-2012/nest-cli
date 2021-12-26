/**
 * Author:hong.rong
 * Desc:数据库配置
 * Date:2021-12-26
 */

import { join } from 'path';
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '132252',
  database: 'nest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  autoLoadEntities: true,
  synchronize: true,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
};
