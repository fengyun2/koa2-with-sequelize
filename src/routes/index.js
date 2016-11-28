/*
 * @Author: fengyun2
 * @Date:   2016-07-17 22:42:51
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:24:08
 */

/**
 * 已经被废弃
 */

'use strict';

import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'

const router = Router()

router.get('/', indexCtrl)
router.get('/news', async (ctx, next) => {
  ctx.body = '我是新闻页...'
})


export default router
