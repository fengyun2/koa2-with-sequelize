/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:22:40
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:48:34
 */
///<reference path="../../typings/index.d.ts" />
"use strict";

import jwt from 'jwt-simple';
import util from 'util';

/*
 * 校验会话
 */
const auth = function() {
    return async(ctx, next) => {
        if (!ctx.session || !ctx.session.user) {
            ctx.send(null, 999, "会话失效");
            return;
        }
        await next()
    }
}

/*
 * 解密token
 */
const getUserInfo = (token) => {
    return new Promise((resolve, reject) => {
        let decoded = jwt.decoded(token, 'BLOG_APi_LOGIN');
        if (!decoded) {
            return reject({ retMsg: '解析token失败!', retCode: -100 })
        }
        if (decoded.exp <= Date.now()) {
            return reject({ retMsg: '登录已过期,请重新登录!', retCode: -401 })
        }
        return resolve(decoded);
    })
};

/*
 * 验证token
 */
const checkToken = function() {
    return async(ctx, next) => {
        let token = ctx.header.authorization || null;
        console.log(`token~~~ ${token}`);
        if (!token) {
            ctx.send(null, -1, 'token 缺失!')
        }
        try {
            // 解析token
            let result = await getUserInfo(token);
            ctx.session.auth = result;
            next();
        } catch (err) {
            console.error(`checkToken: JSON.stringify(err)`);
            ctx.send(null, -99, err.message);
        }
    }
}
export {
    auth,
    checkToken,
}