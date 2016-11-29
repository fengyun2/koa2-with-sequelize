import User from '../../schema/mysql/user'
import Account from '../../schema/mysql/account'

/**
 * 返回对象
 */
const add = async() => {
  const user = await User.create({
    'name': 'ly26',
    'nick_name': '小红',
    // 'email': '1518550427@qq.com',
    'department': '技术部'
  })

  const account = user.createAccount({'email': '1518550426@qq.com'})

  // console.log(user.get({'plain': true}))

  return account
  // return user.get({'plain': true})
}

/**
 * 返回值是整型
 */
const update = async () => {
  const user = await User.update({
    'nick_name': '小米Note2',
    'department': '行政部'
  },{
    'fields': ['nick_name', 'department'],
    'where': {
      'id': [1, 2, 3, 4]
    }
  })
  console.log(`update: >>>`, user)

  return user
}

/**
 * 返回值是整型
 */
const remove = async () => {
  const user = await User.destroy({
    'where': {
      'id': [1]
    }
  })
  return user
}

const find = async () => {
  const pageSize = 3
  const curPage = 1
  const users = await User.findAll({
    'attributes': ['id', ['nick_name', 'nickName']],
    'row': true,
    // 'where': {
    //   '$not': [
    //     {'id': [1, 2, 4]},
    //   ],
    //   'id': [1, 2, 3, 4, 5]
    // },
    'order': [
      ['id', 'DESC'],
      ['updated_at', 'DESC']
    ],
    'limit': pageSize,
    'offset': pageSize*(curPage-1)
  })
  return users
  // return users
}

const findById = async (id = 1) => {
  const user = await User.findById(id)
  return user
}

const findOne = async () => {
  const user = await User.findOne({
    'where': {'nick_name': '小红'}
  })
  return user
}

add().then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})

// update().then(res => {
//   // console.log(res)
// }).catch(err => {
//   console.error(err)
// })

// remove().then(res => {
//   console.log(`delete >>> `, res)
// }).catch(err => {
//   console.error(err)
// })

// find().then(res => {
//   res.forEach(item => {
//     console.log(item.toJSON())
//   })
// }).catch(err => {
//   console.error(err)
// })

// findById(5).then(res => {
//   console.log(res)
//   if (!!res) {
//     console.log(res.toJSON())
//   }
// }).catch(err => {
//   console.error(err)
// })

// findOne().then(res => {
//   // console.log(res)
//   if (!!res) {
//     console.log(res.toJSON())
//   }
// }).catch(err => {
//   console.error(err)
// })

// User.findAndCountAll({limit: 3}).then(res => {
//   if (!!res) {
//     console.log(res.count)
//     // console.log(res.rows)
//     console.log(Array.isArray(res.rows))
//     // console.log(res.toJSON())
//   }
// }).catch(err => {
//   console.error(err)
// })

// 批量插入(返回的主键 id 将会是空)
// User.bulkCreate([
//   {
//     'name': 'ly30',
//     'nick_name': '小红',
//     'email': '1518550424@qq.com',
//     'department': '技术部'
//   },
//     {
//     'name': 'ly31',
//     'nick_name': '小红',
//     'email': '1518550424@qq.com',
//     'department': '技术部'
//   },
//     {
//     'name': 'ly32',
//     'nick_name': '小红',
//     'email': '1518550424@qq.com',
//     'department': '技术部'
//   }
// ]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.error(err)
// })

// 批量更新(居然是一个数组)
// User.update({'nick_name': '云仔'},{
//   'where': {
//     'id': {
//       '$gt': 30
//     }
//   }
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.error(err)
// })