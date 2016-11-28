/*
 * @Author: fengyun2
 * @Date:   2016-07-16 19:39:57
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:26:25
 */

/**
     * 主入口文件
     */
'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _koa = require('koa');var _koa2 = _interopRequireDefault(_koa);
var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _koaViews = require('koa-views');var _koaViews2 = _interopRequireDefault(_koaViews);
var _koaConvert = require('koa-convert');var _koaConvert2 = _interopRequireDefault(_koaConvert);
var _koaJson = require('koa-json');var _koaJson2 = _interopRequireDefault(_koaJson);
var _koaBodyparser = require('koa-bodyparser');var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);
var _koaLogger = require('koa-logger');var _koaLogger2 = _interopRequireDefault(_koaLogger);
var _koaStaticPlus = require('koa-static-plus');var _koaStaticPlus2 = _interopRequireDefault(_koaStaticPlus);
var _koaOnerror = require('koa-onerror');var _koaOnerror2 = _interopRequireDefault(_koaOnerror);
var _koaGenericSession = require('koa-generic-session');var _koaGenericSession2 = _interopRequireDefault(_koaGenericSession);
var _koaGenericSessionMongo = require('koa-generic-session-mongo');var _koaGenericSessionMongo2 = _interopRequireDefault(_koaGenericSessionMongo);






var _backend = require('./routes/backend');var _backend2 = _interopRequireDefault(_backend);



var _response = require('./middlewares/response');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*引入路由文件*/ // import index from './routes/index'
// import users from './routes/users'
var app = new _koa2.default(); // import frontendRoutes from './routes/frontend'

var backendRouter = new _koaRouter2.default({
    prefix: "/api" });


var frontendRouter = new _koaRouter2.default();

app.
use((0, _koaConvert2.default)((0, _koaStaticPlus2.default)(_path2.default.join(__dirname, 'public'), {
    pathPrefix: '' })))
// 静态文件指定中间件
.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)())) // post请求解析中间件
.use((0, _koaConvert2.default)((0, _koaJson2.default)())).
use((0, _koaConvert2.default)((0, _koaLogger2.default)())) // 日志中间件
.use((0, _response.response)()); // 定制报文格式

// views
app.use((0, _koaViews2.default)(_path2.default.join(__dirname, '../views'), {
    extension: 'html' }));


// 500 error
(0, _koaOnerror2.default)(app, {
    template: 'views/500.html' });


// logger
app.use(function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var start, ms;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        start = new Date();_context.next = 3;return (
                            next());case 3:
                        ms = new Date() - start;
                        console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');case 5:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


//设置一个签名 Cookie 的秘钥,也可以借助KeyGrip生成你想的一个实例
app.keys = ['keys', 'koa2-blog'];
//setting session
app.use((0, _koaConvert2.default)((0, _koaGenericSession2.default)({
    store: new _koaGenericSessionMongo2.default() })));



// 路由中间件
app.use(backendRouter.routes(), backendRouter.allowedMethods());

// router config
// router.use('/', index.routes())
// router.use('/users', users.routes())


(0, _backend2.default)(backendRouter);
// frontendRoutes(frontendRouter)

// 404
app.use(function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                        ctx.status = 404;_context2.next = 3;return (
                            ctx.render('404'));case 3:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function (_x3) {return _ref2.apply(this, arguments);};}());


// error logger
app.on('error', function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(err, ctx) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                        console.log('error occured:', err);case 1:case 'end':return _context3.stop();}}}, _callee3, undefined);}));return function (_x4, _x5) {return _ref3.apply(this, arguments);};}());


var port = parseInt('3000');
var server = _http2.default.createServer(app.callback());

server.listen(port);
server.on('error', function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;}

});
server.on('listening', function () {
    console.log('Listening on port: %d', port);
});exports.default =

app;module.exports = exports['default'];
//# sourceMappingURL=app.js.map