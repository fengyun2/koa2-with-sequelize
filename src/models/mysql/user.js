import User from '../../schema/mysql/user'

/**
 * 返回对象
 */
const add = async() => {
  const user = await User.create({
    'user_id': '4',
    'name': 'ly4',
    'nick_name': '小红',
    'email': '1518550424@qq.com',
    'department': '技术部'
  })

  console.log(user.get({'plain': true}))

  return user.get({'plain': true})
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
  const users = await User.findAll({
    'attributes': ['id', ['nick_name', 'nickName']],
    'row': true,
    'where': {
      'id': [1, 2, 3, 4, 5]
    }
  })
  return users
  // return users
}


// add().then(res => {
//   // console.log(res)
// }).catch(err => {
//   console.error(err)
// })

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

find().then(res => {
  // console.log(res)
  // console.log(res.length)

  res.forEach(item => {
    console.log(item.toJSON())
  })
}).catch(err => {
  console.error(err)
})