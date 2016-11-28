'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var ObjectID = require('mongodb').ObjectID,
mongodb = require('./db');

module.exports = {
    // 创建
    insert: function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(obj) {var res;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                                mongodb.insert(this.collectionName, obj));case 2:res = _context.sent;return _context.abrupt('return',
                            res);case 4:case 'end':return _context.stop();}}}, _callee, this);}));function insert(_x) {return _ref.apply(this, arguments);}return insert;}(),


    // 更新
    update: function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(obj) {var res;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                mongodb.update(this.collectionName, obj));case 2:res = _context2.sent;return _context2.abrupt('return',
                            res);case 4:case 'end':return _context2.stop();}}}, _callee2, this);}));function update(_x2) {return _ref2.apply(this, arguments);}return update;}(),


    // 删除
    remove: function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {var res;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                mongodb.remove(this.collectionName, {
                                    _id: new ObjectID(id) }));case 2:res = _context3.sent;return _context3.abrupt('return',

                            res);case 4:case 'end':return _context3.stop();}}}, _callee3, this);}));function remove(_x3) {return _ref3.apply(this, arguments);}return remove;}(),


    // 查询多条
    find: function () {var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(query, option) {var res;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                                mongodb.find(this.collectionName, query, option));case 2:res = _context4.sent;return _context4.abrupt('return',
                            res);case 4:case 'end':return _context4.stop();}}}, _callee4, this);}));function find(_x4, _x5) {return _ref4.apply(this, arguments);}return find;}(),


    // 查询单条
    findOne: function () {var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(query, option) {var res;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                                mongodb.findOne(this.collectionName, query, option));case 2:res = _context5.sent;return _context5.abrupt('return',
                            res);case 4:case 'end':return _context5.stop();}}}, _callee5, this);}));function findOne(_x6, _x7) {return _ref5.apply(this, arguments);}return findOne;}(),


    // 获取全部
    getAll: function () {var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {var res;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                                mongodb.find(this.collectionName, {}));case 2:res = _context6.sent;case 3:case 'end':return _context6.stop();}}}, _callee6, this);}));function getAll() {return _ref6.apply(this, arguments);}return getAll;}(),


    // 按id查询
    getById: function () {var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(id) {var res;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                                mongodb.findOne(this.collectionName, {
                                    _id: new ObjectID(id) }));case 2:res = _context7.sent;case 3:case 'end':return _context7.stop();}}}, _callee7, this);}));function getById(_x8) {return _ref7.apply(this, arguments);}return getById;}(),



    // 按照很多id来查询
    getByIds: function () {var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(ids, option) {var res;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                            ids = ids.map(function (id) {
                                new ObjectID(id);
                            });_context8.next = 3;return (
                                mongodb.find(this.collectionName, {
                                    _id: {
                                        $in: ids } },

                                option));case 3:res = _context8.sent;return _context8.abrupt('return',
                            res);case 5:case 'end':return _context8.stop();}}}, _callee8, this);}));function getByIds(_x9, _x10) {return _ref8.apply(this, arguments);}return getByIds;}(),


    // 列出(带分页)
    getByPage: function () {var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(query, sort, pageSize, pageNum) {var option, res;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                            if (!query) query = {};
                            if (!sort) sort = [
                            ['_id', 'desc']];

                            option = {
                                sort: sort,
                                limit: pageSize,
                                skip: (pageNum - 1) * pageSize };_context9.next = 5;return (

                                mongodb.find(this.collectionName, query, option));case 5:res = _context9.sent;return _context9.abrupt('return',
                            res);case 7:case 'end':return _context9.stop();}}}, _callee9, this);}));function getByPage(_x11, _x12, _x13, _x14) {return _ref9.apply(this, arguments);}return getByPage;}(),


    // 计数
    count: function () {var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(query) {var res;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                            if (!query) query = {};_context10.next = 3;return (
                                mongodb.count(this.collectionName, query));case 3:res = _context10.sent;case 4:case 'end':return _context10.stop();}}}, _callee10, this);}));function count(_x15) {return _ref10.apply(this, arguments);}return count;}() };
//# sourceMappingURL=service.js.map