'use strict'

require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3']
})
// const Koa = require('koa')
import Koa from 'koa'
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log(`listening at port 3000...`);
})
