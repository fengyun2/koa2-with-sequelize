'use strict';exports.__esModule = true;var _mongodb = require('../config/mongodb');var _mongodb2 = _interopRequireDefault(_mongodb);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_mongoose2.default.Promise = global.Promise;
var Schema = _mongoose2.default.Schema;
var mongoLink = 'mongodb://' + _mongodb2.default.host + ':' + _mongodb2.default.port + '/' + _mongodb2.default.database;

var db = _mongoose2.default.createConnection(mongoLink, function (err) {
    if (err) throw err;
    console.error('connect mongodb\'s database success');
});

db.on('error', function (err) {
    console.error('数据库连接失败!');
});

db.on('open', function () {
    console.log('数据库连接成功!');
});exports.default =

{
    db: db,
    Schema: Schema };module.exports = exports['default'];
//# sourceMappingURL=mongodb.js.map