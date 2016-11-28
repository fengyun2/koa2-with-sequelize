/**
 * 建立数据库连接
 */
import Sequelize from 'sequelize'
import mysqlConfig from '../../config/mysql'
Sequelize.Promise = Promise

const sequelize = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.root,
  mysqlConfig.password,
  {
    'dialect': 'mysql',
    'host': mysqlConfig.host,
    'port': mysqlConfig.port,
    'define': {
      // 字段以下划线（_）来分割（默认是驼峰命名风格）
      'underscored': true
    }
  }
)

module.exports ={
  sequelize,
  Sequelize
}