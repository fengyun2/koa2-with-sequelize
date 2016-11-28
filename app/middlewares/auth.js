/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:22:40
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:48:34
 */
///<reference path="../../typings/index.d.ts" />
"use strict";exports.__esModule = true;exports.checkToken = exports.auth = undefined;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jwtSimple = require('jwt-simple');var _jwtSimple2 = _interopRequireDefault(_jwtSimple);
var _util = require('util');var _util2 = _interopRequireDefault(_util);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/*
                                                                                                                                                                      * 校验会话
                                                                                                                                                                      */
var auth = function auth() {var _this = this;
    return function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                            !ctx.session || !ctx.session.user)) {_context.next = 3;break;}
                            ctx.send(null, 999, "会话失效");return _context.abrupt('return');case 3:_context.next = 5;return (


                                next());case 5:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}();

};

/*
    * 解密token
    */
var getUserInfo = function getUserInfo(token) {
    return new _promise2.default(function (resolve, reject) {
        var decoded = _jwtSimple2.default.decoded(token, 'BLOG_APi_LOGIN');
        if (!decoded) {
            return reject({ retMsg: '解析token失败!', retCode: -100 });
        }
        if (decoded.exp <= Date.now()) {
            return reject({ retMsg: '登录已过期,请重新登录!', retCode: -401 });
        }
        return resolve(decoded);
    });
};

/*
    * 验证token
    */
var checkToken = function checkToken() {var _this2 = this;
    return function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {var token, result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                            token = ctx.header.authorization || null;
                            console.log('token~~~ ' + token);
                            if (!token) {
                                ctx.send(null, -1, 'token 缺失!');
                            }_context2.prev = 3;_context2.next = 6;return (


                                getUserInfo(token));case 6:result = _context2.sent;
                            ctx.session.auth = result;
                            next();_context2.next = 15;break;case 11:_context2.prev = 11;_context2.t0 = _context2['catch'](3);

                            console.error('checkToken: JSON.stringify(err)');
                            ctx.send(null, -99, _context2.t0.message);case 15:case 'end':return _context2.stop();}}}, _callee2, _this2, [[3, 11]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}();


};exports.

auth = auth;exports.
checkToken = checkToken;
//# sourceMappingURL=auth.js.map