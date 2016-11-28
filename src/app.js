/*
 * @Author: fengyun2
 * @Date:   2016-07-16 19:39:57
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:26:25
 */

/**
 * 主入口文件
 */
'use strict'
import http from 'http'
import Koa from 'koa'
import Router from 'koa-router'
import path from 'path'
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'
import session from 'koa-generic-session'
import MongoStore from 'koa-generic-session-mongo'

/*引入路由文件*/

// import index from './routes/index'
// import users from './routes/users'

import backendRoutes from './routes/backend'

// import frontendRoutes from './routes/frontend'

import { response } from './middlewares/response'

const app = new Koa()

let backendRouter = new Router({
    prefix: "/api"
});

let frontendRouter = new Router();

app
    .use(convert(koaStatic(path.join(__dirname, 'public'), {
        pathPrefix: ''
    }))) // 静态文件指定中间件
    .use(convert(bodyParser())) // post请求解析中间件
    .use(convert(json()))
    .use(convert(logger())) // 日志中间件
    .use(response()) // 定制报文格式

// views
app.use(views(path.join(__dirname, '../views'), {
    extension: 'html'
}))

// 500 error
koaOnError(app, {
    template: 'views/500.html'
})

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//设置一个签名 Cookie 的秘钥,也可以借助KeyGrip生成你想的一个实例
app.keys = ['keys', 'koa2-blog'];
//setting session
app.use(convert(session({
    store: new MongoStore()
})));


// 路由中间件
app.use(backendRouter.routes(), backendRouter.allowedMethods())

// router config
// router.use('/', index.routes())
// router.use('/users', users.routes())


backendRoutes(backendRouter)
    // frontendRoutes(frontendRouter)

// 404
app.use(async(ctx) => {
    ctx.status = 404
    await ctx.render('404')
})

// error logger
app.on('error', async(err, ctx) => {
    console.log('error occured:', err)
})

const port = parseInt('3000')
const server = http.createServer(app.callback())

server.listen(port)
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(port + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(port + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
})
server.on('listening', () => {
    console.log('Listening on port: %d', port)
})

export default app