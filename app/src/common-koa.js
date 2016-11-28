/*
* @Author: fengyun2
* @Date:   2016-07-16 19:50:49
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-16 19:59:24
*/

'use strict';
require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3'] });

var Koa = require('koa');
var app = new Koa();

app.use(function (ctx, next) {
  var start = new Date();
  return next().then(function () {
    var ms = new Date() - start;
    console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');
  });
});
app.use(function (ctx) {
  ctx.body = 'Hello Koa';
});
app.listen(3000);
//# sourceMappingURL=common-koa.js.map