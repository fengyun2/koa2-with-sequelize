/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:19:38
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:20:13
 */
///<reference path="../../typings/index.d.ts" />
"use strict";

var crypto = require('crypto');

exports.getMd5 = function(data, limit) {
    var md5 = crypto.createHash('md5').update(data).digest('hex');

    if (limit && typeof limit === "number") {
        return md5.substr(0, limit);
    }

    return md5;
}