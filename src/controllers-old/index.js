/*
 * @Author: fengyun2
 * @Date:   2016-07-17 22:44:21
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-17 22:54:50
 */

'use strict';

export default async(ctx, next) => {
    const title = 'Hello LY'

    await ctx.render('index', {
        title
    })
}
