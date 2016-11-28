/*
 * @Author: fengyun2
 * @Date:   2016-07-17 23:32:34
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:23:52
 */

/*已经被废弃*/

'use strict';

import Router from 'koa-router'
import {list, add} from '../controllers/userCtrl'

const router = Router()

router.get('/', list)
router.get('/add', add)
router.get('/news', async (ctx, next) => {
  ctx.body = '我是新闻页...'
})

export default router
