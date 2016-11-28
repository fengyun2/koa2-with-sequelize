'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 用户表

var service = require('./service'),
mongodb = require('./db'),
ObjectID = require('mongodb').ObjectID;

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


var Service = function Service() {
    this.collectionName = 'users';

    // 这里扩充你自己的方法 比如 按照邀请码搜索
    this.getByInviteCode = _regenerator2.default.mark(function _callee(inviteCode) {var res;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                            this.findOne({ invitecode: inviteCode }));case 2:res = _context.sent;return _context.abrupt('return',
                        res);case 4:case 'end':return _context.stop();}}}, _callee, this);});


    if (Service.instance == null)
    {
        Service.instance = this;
    }
    return Service.instance;
};
Service.prototype = service;

module.exports = Service;
//# sourceMappingURL=service_user.js.map