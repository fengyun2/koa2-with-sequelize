import {sequelize, Sequelize} from './mysql'
import Account from './account'
const User = sequelize.define(
  'user', // 表名(小写),(生成时, 会自动转换为复数形式)
  // 字段定义
  {
    // 'user_id': { // 主键
    //   'type': Sequelize.CHAR(10),
    //   'allowNull': false,
    //   'unique': true
    // },
    'name': {
      'type': Sequelize.CHAR(20),
      'allowNull': false,
      'unique': true
    },
    'nick_name': {
      'type': Sequelize.CHAR(50),
      'allowNull': true
    },
    // 'email': {
    //   'type': Sequelize.CHAR(50),
    //   'allowNull': true
    // },
    'department': {
      'type': Sequelize.CHAR(64),
      'allowNull': true
    }
  },
  {
    // 自定义表名
    'freezeTableName': true,
    'tableName': 'users',

    // 是否需要增加createdAt、updatedAt、deletedAt字段
    'timestamps': true,

    // 将createdAt字段改个名
    // 'createdAt': 'ctime',

    // // 将updatedAt字段改个名
    // 'updatedAt': 'utime',

    // // 将deletedAt字段改名
    // // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    // 'deletedAt': 'dtime',
    'paranoid': true
  }
)

// User.sync() //创建表
// const createRes = User.sync({force: true}) //创建表

// createRes.then(res => {
//   console.log('create table user 》》》', res)
// }).catch(err => {console.error('create table user error')})

// 此时User实例对象拥有getAccount、setAccount、addACCount 方法
// setTimeout(() => {
  User.hasOne(Account)
  Account.belongsTo(User)
  // Account.sync({force: true})
// }, 5000)

export default User