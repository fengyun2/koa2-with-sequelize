'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _blogService = require('../services/blogService.js');var _blogService2 = _interopRequireDefault(_blogService);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var add = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var blog;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        blog = {
                            title: '宝宝',
                            slug: '宝宝不哭',
                            state: 'published',
                            createdBy: 'fengyun2',
                            updatedBy: 'fengyun2' };_context.prev = 1;_context.next = 4;return (


                            _blogService2.default.add(blog));case 4:
                        ctx.body = {
                            tag: 'success',
                            status: 1,
                            message: '添加成功!' };_context.next = 11;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);


                        console.error('add error: ' + _context.t0);
                        ctx.body = {
                            tag: 'error',
                            status: _context.t0.status,
                            message: _context.t0.message };case 11:case 'end':return _context.stop();}}}, _callee, undefined, [[1, 7]]);}));return function add(_x, _x2) {return _ref.apply(this, arguments);};}(); ///<reference path="../../typings/index.d.ts" />




var list = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {var conditions, fields, options, result, resultByName;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        conditions = { "state": "published" };
                        fields = { _id: 0 };
                        options = { skip: 0, limit: 2 };_context2.prev = 3;_context2.next = 6;return (

                            _blogService2.default.list(conditions, fields, options));case 6:result = _context2.sent;_context2.next = 9;return (

                            _blogService2.default.findByName('宝宝', function (err, blogs) {
                                if (err) console.error('err: ' + err.message);
                                console.log('blogs: ' + blogs);
                            }));case 9:resultByName = _context2.sent;
                        ctx.body = {
                            tag: 'success',
                            status: 1,
                            message: '查询成功!',
                            data: result };

                        console.log('result: ' + result);_context2.next = 18;break;case 14:_context2.prev = 14;_context2.t0 = _context2['catch'](3);

                        console.error('list error: ' + _context2.t0);
                        ctx.body = {
                            tag: 'error',
                            status: _context2.t0.status,
                            message: _context2.t0.message };case 18:



                        console.log(444);case 19:case 'end':return _context2.stop();}}}, _callee2, undefined, [[3, 14]]);}));return function list(_x3, _x4) {return _ref2.apply(this, arguments);};}();exports.default =



{
    add: add,
    list: list };module.exports = exports['default'];
//# sourceMappingURL=blogController.js.map