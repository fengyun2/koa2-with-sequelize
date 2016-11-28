/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:29:28
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:47:07
 */
///<reference path="../../typings/index.d.ts" />
"use strict";
var util = require('util');

/*
 * 定制报文格式
 */
const response = function() {
    return async(ctx, next) => {
        ctx.send = function(res, code, msg) {
            var result = {
                retCode: code
            }
            if (res) {
                result = util._extend(result, { data: res });
            }
            if (code !== 0 && msg) {
                result = util._extend(result, {
                    retMsg: msg
                });
            }
            ctx.body = JSON.stringify(result);
        };

        await next()
    }
}

export {
    response
}