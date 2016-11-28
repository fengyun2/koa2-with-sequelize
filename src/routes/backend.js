/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:49:48
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:45:04
 */

'use strict';

import User from '../controllers/userController';

import Blog from '../controllers/blogController';

// import { auth } from '../middlewares/auth'

export default function(router) {

    // 获取用户列表
    // router.get('/users', auth(), list)
    // router.get('/users', User.list)
    // 获取用户详情
    // router.get('/user/:userId', User.fetch)
    // 创建用户
    router.get('/user/register', User.register)
        // 检测用户
    router.get('/user/check', User.check)
        // 删除用户
        // router.post('/user/delete', User.remove)
        // 更新用户
        // router.post('/user/update', User.update)

    // 获取博客
    router.get('/blogs', Blog.list);
    router.get('/blogs/add', Blog.add)
        .post('/blogs/add', Blog.add);
}