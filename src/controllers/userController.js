
import userService from '../services/userService';

/**
 * [注册]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const register = async(ctx, next) => {
    const user = {
        name: 'fengyun2',
        email: '1518550424@qq.com',
        password: 123456,
        location: 'GuangZhou',
    };

    // 返回的Promise对象,也可以使用.then().catch()
    try {
        const result = await userService.register(user);

        ctx.body = {
            tag: 'success',
            status: 1,
            message: '注册成功!',
            data: result,
        }
    } catch (err) {
        console.error(`register error: ${err}`);

        ctx.body = {
            tag: 'error',
            status: err.status,
            message: err.message,
        }
    }
};

/**
 * 检查该用户是否已被注册
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
const check = async(ctx) => {
    const _id = ctx.request.query.id || '';
    if (!_id) {
        ctx.body = {
            tag: 'error',
            status: -1,
            message: '参数缺失',
        }
    }

    try {
        let conditions = { _id: _id };
        await userService.checkIsExists(conditions);
        ctx.body = {
            tag: 'success',
            status: 1,
            message: '查询成功!',
        }
    } catch (err) {
        console.error(`check error: ${err}`);
        ctx.body = {
            tag: 'error',
            status: err.status,
            message: err.message,
        }
    }
};

export default {
    register,
    check,
}