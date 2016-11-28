/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:29:28
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:47:07
 */
///<reference path="../../typings/index.d.ts" />
"use strict";exports.__esModule = true;exports.response = undefined;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var util = require('util');

/*
                             * 定制报文格式
                             */
var response = function response() {var _this = this;
    return function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            ctx.send = function (res, code, msg) {
                                var result = {
                                    retCode: code };

                                if (res) {
                                    result = util._extend(result, { data: res });
                                }
                                if (code !== 0 && msg) {
                                    result = util._extend(result, {
                                        retMsg: msg });

                                }
                                ctx.body = (0, _stringify2.default)(result);
                            };_context.next = 3;return (

                                next());case 3:case "end":return _context.stop();}}}, _callee, _this);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}();

};exports.


response = response;
//# sourceMappingURL=response.js.map