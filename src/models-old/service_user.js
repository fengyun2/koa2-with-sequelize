// 用户表

const service = require('./service'),
    mongodb = require('./db'),
    ObjectID = require('mongodb').ObjectID

// const Service = () => {
//     this.collectionName = 'users'
//
//     this.getByInviteCode = async(inviteCode) => {
//         const res = await this.findOne({
//             inviteCode: inviteCode
//         })
//         return res
//     }
//
//     // 单例模式
//     if (Service.instance == null) {
//         Service.instance = this
//     }
//     return Service.instance
// }
//
// Service.prototype = service
//
// module.exports = Service


var Service = function(){
    this.collectionName = 'users';

    // 这里扩充你自己的方法 比如 按照邀请码搜索
    this.getByInviteCode = function * (inviteCode){
        var res = yield this.findOne({ invitecode : inviteCode });
        return res;
    }

    if(Service.instance == null)
    {
        Service.instance = this;
    }
    return Service.instance;
}
Service.prototype = service;

module.exports = Service;
