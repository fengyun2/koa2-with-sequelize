'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);




var _koa = require('koa');var _koa2 = _interopRequireDefault(_koa);
var _koaConvert = require('koa-convert');var _koaConvert2 = _interopRequireDefault(_koaConvert);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}require('babel-core/register')({ presets: ['es2015-node5', 'stage-3'] });
var app = new _koa2.default();

app.use(_regenerator2.default.mark(function _callee(next) {var start, ms;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                    start = new Date();_context.next = 3;return (
                        next);case 3:
                    ms = new Date() - start;
                    console.log(this.method + ' ' + this.url + ' - ' + ms + 'ms');case 5:case 'end':return _context.stop();}}}, _callee, this);}));


app.use(function (ctx) {
    ctx.body = 'Hello Koa';
});

app.listen(3000, function () {
    console.log('listening at port 3000...');
});
//# sourceMappingURL=convert-koa.js.map