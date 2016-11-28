'use strict';exports.__esModule = true;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);

var _userModel = require('../models/userModel');var _userModel2 = _interopRequireDefault(_userModel);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                    * [注册]
                                                                                                                                                                                                    * @param  {[type]} options [description]
                                                                                                                                                                                                    * @return {[type]}         [description]
                                                                                                                                                                                                    */
var register = function register(options) {
    return _userModel2.default.save(options);
}; ///<reference path="../../typings/index.d.ts" />

var login = function login(user) {

};

var checkIsExists = function checkIsExists(conditions) {
    return new _promise2.default(function (resolve, reject) {
        try {
            var result = _userModel2.default.findOne(conditions);
            if (!result) {
                return reject({
                    err: '',
                    message: '没有此用户!',
                    status: -99 });

            }
            return resolve(result);
        } catch (err) {
            return reject({
                err: err.errors,
                message: '查询出错!',
                status: -99 });

        }
    });
};exports.default =
{
    register: register,
    checkIsExists: checkIsExists };module.exports = exports['default'];
//# sourceMappingURL=userService.js.map