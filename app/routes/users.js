/*
 * @Author: fengyun2
 * @Date:   2016-07-17 23:32:34
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:23:52
 */

/*已经被废弃*/

'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _userCtrl = require('../controllers/userCtrl');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = (0, _koaRouter2.default)();

router.get('/', _userCtrl.list);
router.get('/add', _userCtrl.add);
router.get('/news', function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            ctx.body = '我是新闻页...';case 1:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());exports.default =


router;module.exports = exports['default'];
//# sourceMappingURL=users.js.map