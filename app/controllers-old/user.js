'use strict';

// 改为面向对象的形式

// export default class User {
//     constructor() {
//         if (User.instance == null) {
//           User.instance = new User();
//         }
//         this.title = 'UserController'
//     }
//     async list(ctx, next) {
//         await ctx.render('index', {
//             title: 'UserController'
//         })
//     }
// }
exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



var ServiceUser = require('../models/service_user');
var serviceUser = new ServiceUser();
var title = 'Hello LY';



//  获取用户列表
var list = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var user1;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        // 查询
                        user1 = serviceUser.find({
                            name: 'freewolf' });


                        user1.then(function (value) {
                            console.log(value);
                        }, function (value) {
                            console.log(value);
                        });_context.next = 4;return (
                            ctx.render('index', {
                                title: title }));case 4:case 'end':return _context.stop();}}}, _callee, undefined);}));return function list(_x, _x2) {return _ref.apply(this, arguments);};}();



var add = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {var user, res;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        user = {
                            name: 'freewolf',
                            password: '123',
                            invitecode: 'abcd' };

                        // 插入
                        res = serviceUser.insert(user);
                        console.log(res);_context2.next = 5;return (
                            ctx.render('index', {
                                title: title }));case 5:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function add(_x3, _x4) {return _ref2.apply(this, arguments);};}();exports.default =



{
    list: list,
    add: add };module.exports = exports['default'];
//# sourceMappingURL=user.js.map