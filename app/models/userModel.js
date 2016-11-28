'use strict';exports.__esModule = true;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);

var _userSchema = require('../schema/userSchema');var _userSchema2 = _interopRequireDefault(_userSchema);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                        * [添加用户]
                                                                                                                                                                                                        * @param  {[object]} user [description]
                                                                                                                                                                                                        * @return {[type]}      [description]
                                                                                                                                                                                                        */
var save = function save(user) {
    var action = new _userSchema2.default(user);
    return new _promise2.default(function (resolve, reject) {
        action.save(function (err, result) {
            if (err) {
                return reject({ err: err.errors, message: err.message, status: -99 });
            }
            return resolve(result);
        });
    });
};

/**
    * [查询单个用户]
    * @param  {[object]} conditions [查询条件]
    * @param  {[object]} fields     [过滤字段]
    * @param  {[object]} options    [其他操作]
    * @return {[type]}            [description]
    */ ///<reference path="../../typings/index.d.ts" />
var findOne = function findOne(conditions, fields, options) {
    // return UserModel.findOne(conditions, fields, options).exec();

    return new _promise2.default(function (resolve, reject) {
        _userSchema2.default.findOne(conditions, fields, options).exec(function (err, doc) {
            if (err) return reject({ err: err.errors, message: '查询出错!', status: -99 });
            if (!doc) return reject({ err: err.errors, message: '没有此用户!', status: -99 });
            return resolve(doc);
        });
    });
};

var update = function update(where, options, callback) {
    _userSchema2.default.update(where, options, { multi: true }, function (err, numberAffected, raw) {
        if (err) return callback(err);
        callback(null, numberAffected);
    });
};exports.default =

{
    save: save,
    findOne: findOne,
    update: update };module.exports = exports['default'];
//# sourceMappingURL=userModel.js.map