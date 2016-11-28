import User from '../models/mongodb/userModel'

/**
 * [注册]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
const register = (options) => {
    return User.save(options)
}

const login = (user) => {

}

const checkIsExists = (conditions) => {
    return new Promise((resolve, reject) => {
        try {
            const result = User.findOne(conditions)
            if (!result) {
                return reject({
                    err: '',
                    message: '没有此用户!',
                    status: -99,
                })
            }
            return resolve(result)
        } catch (err) {
            return reject({
                err: err.errors,
                message: '查询出错!',
                status: -99,
            })
        }
    })
}
export default {
    register,
    checkIsExists,
}
