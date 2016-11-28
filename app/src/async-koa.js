'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);





var _koa = require('koa');var _koa2 = _interopRequireDefault(_koa);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}require('babel-core/register')({ presets: ['es2015-node5', 'stage-3'] }); // const Koa = require('koa')
var app = new _koa2.default();

app.use(function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var start, ms;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            start = new Date();_context.next = 3;return (
              next());case 3:
            ms = new Date() - start;
            console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');case 5:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


app.use(function (ctx) {
  ctx.body = 'Hello Koa';
});

app.listen(3000, function () {
  console.log('listening at port 3000...');
});
//# sourceMappingURL=async-koa.js.map