/*
* @Author: fengyun2
* @Date:   2016-07-16 19:41:22
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-16 19:59:35
*/

'use strict';
require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3'] });

var Koa = require('koa');
var app = new Koa();

app.use(function (ctx) {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
//# sourceMappingURL=hello-koa.js.map