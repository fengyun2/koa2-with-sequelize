'use strict';

// 改为面向对象的形式

// export default class User {
//     constructor() {
//         if (User.instance == null) {
//           User.instance = new User();
//         }
//         this.title = 'UserController'
//     }
//     async list(ctx, next) {
//         await ctx.render('index', {
//             title: 'UserController'
//         })
//     }
// }




const ServiceUser = require('../models/service_user')
const serviceUser = new ServiceUser()
const title = 'Hello LY'



//  获取用户列表
const list = async(ctx, next) => {
    // 查询
    const user1 = serviceUser.find({
        name: 'freewolf'
    })

    user1.then(function(value) {
        console.log(value)
    }, function(value) {
        console.log(value)
    })
    await ctx.render('index', {
        title
    })
}

const add = async(ctx, next) => {
    const user = {
        name: 'freewolf',
        password: '123',
        invitecode: 'abcd'
    }
    // 插入
    const res = serviceUser.insert(user)
    console.log(res)
    await ctx.render('index', {
        title
    })
}

export default {
    list,
    add
}
