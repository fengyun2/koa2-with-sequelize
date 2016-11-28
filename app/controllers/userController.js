'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _userService = require('../services/userService');var _userService2 = _interopRequireDefault(_userService);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                              * [注册]
                                                                                                                                                                                                              * @param  {[type]}   ctx  [description]
                                                                                                                                                                                                              * @param  {Function} next [description]
                                                                                                                                                                                                              * @return {[type]}        [description]
                                                                                                                                                                                                              */
var register = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var user, result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        user = {
                            name: 'fengyun2',
                            email: '1518550424@qq.com',
                            password: 123456,
                            location: 'GuangZhou' };


                        // 返回的Promise对象,也可以使用.then().catch()
                        _context.prev = 1;_context.next = 4;return (
                            _userService2.default.register(user));case 4:result = _context.sent;

                        ctx.body = {
                            tag: 'success',
                            status: 1,
                            message: '注册成功!',
                            data: result };_context.next = 12;break;case 8:_context.prev = 8;_context.t0 = _context['catch'](1);


                        console.error('register error: ' + _context.t0);

                        ctx.body = {
                            tag: 'error',
                            status: _context.t0.status,
                            message: _context.t0.message };case 12:case 'end':return _context.stop();}}}, _callee, undefined, [[1, 8]]);}));return function register(_x, _x2) {return _ref.apply(this, arguments);};}();




/**
                                                                                                                                                                                                                          * 检查该用户是否已被注册
                                                                                                                                                                                                                          * @param  {[type]} ctx [description]
                                                                                                                                                                                                                          * @return {[type]}     [description]
                                                                                                                                                                                                                          */ ///<reference path="../../typings/index.d.ts" />
var check = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {var _id, conditions;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        _id = ctx.request.query.id || '';
                        if (!_id) {
                            ctx.body = {
                                tag: 'error',
                                status: -1,
                                message: '参数缺失' };

                        }_context2.prev = 2;


                        conditions = { _id: _id };_context2.next = 6;return (
                            _userService2.default.checkIsExists(conditions));case 6:
                        ctx.body = {
                            tag: 'success',
                            status: 1,
                            message: '查询成功!' };_context2.next = 13;break;case 9:_context2.prev = 9;_context2.t0 = _context2['catch'](2);


                        console.error('check error: ' + _context2.t0);
                        ctx.body = {
                            tag: 'error',
                            status: _context2.t0.status,
                            message: _context2.t0.message };case 13:case 'end':return _context2.stop();}}}, _callee2, undefined, [[2, 9]]);}));return function check(_x3) {return _ref2.apply(this, arguments);};}();exports.default =




{
    register: register,
    check: check };module.exports = exports['default'];
//# sourceMappingURL=userController.js.map