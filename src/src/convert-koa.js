'use strict'

require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3']
})
import Koa from 'koa'
import convert from 'koa-convert'
const app = new Koa()

app.use(function*(next) {
    const start = new Date()
    yield next
    const ms = new Date() - start
    console.log(`${this.method} ${this.url} - ${ms}ms`);
})

app.use(ctx => {
    ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log(`listening at port 3000...`);
})
