/**
 * 这个只是临时用途的表
 */
import {sequelize, Sequelize} from './mysql'

import User from './user'

const Account = sequelize.define(
  'account', // 表名(小写),(生成时, 会自动转换为复数形式)
  // 字段定义
  {
    'email': {
      'type': Sequelize.CHAR(64),
      'allowNull': false,
      'unique': true
    },
    'user_id': { // 'user_id' 是外链, 不能定制添加 unique
      'type': Sequelize.INTEGER,
      // 'allowNull': false,
      // 'unique': true
    }
  },
  {
    // 自定义表名
    'freezeTableName': true,
    'tableName': 'accounts',

    // 是否需要增加createdAt、updatedAt、deletedAt字段
    'timestamps': true,

    // 将createdAt字段改个名
    // 'createdAt': 'ctime',

    // // 将updatedAt字段改个名
    // 'updatedAt': 'utime',

    // // 将deletedAt字段改名
    // // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    'deletedAt': 'deleted_at',
    'paranoid': true
  }
)

// Account.sync() //创建表
// Account.sync({force: true}) //创建表

export default Account
