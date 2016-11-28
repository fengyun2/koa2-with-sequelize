
import UserModel from '../../schema/mongodb/userSchema'

/**
 * [添加用户]
 * @param  {[object]} user [description]
 * @return {[type]}      [description]
 */
const save = (user) => {
    const action = new UserModel(user)
    return new Promise((resolve, reject) => {
        action.save((err, result) => {
            if (err) {
                return reject({ err: err.errors, message: err.message, status: -99 })
            }
            return resolve(result)
        })
    })
}

/**
 * [查询单个用户]
 * @param  {[object]} conditions [查询条件]
 * @param  {[object]} fields     [过滤字段]
 * @param  {[object]} options    [其他操作]
 * @return {[type]}            [description]
 */
const findOne = (conditions, fields, options) => {
    // return UserModel.findOne(conditions, fields, options).exec();

    return new Promise((resolve, reject) => {
        UserModel.findOne(conditions, fields, options).exec((err, doc) => {
            if (err) return reject({ err: err.errors, message: '查询出错!', status: -99 })
            if (!doc) return reject({ err: err.errors, message: '没有此用户!', status: -99 })
            return resolve(doc)
        })
    })
}

const update = (where, options, callback) => {
    UserModel.update(where, options, { multi: true }, (err, numberAffected, raw) => {
        if (err) return callback(err)
        callback(null, numberAffected)
    })
}

export default {
    save,
    findOne,
    update,
}
