import blogService from '../services/blogService.js';

const add = async(ctx, next) => {
    const blog = {
        title: '宝宝',
        slug: '宝宝不哭',
        state: 'published',
        createdBy: 'fengyun2',
        updatedBy: 'fengyun2',
    }
    try {
        await blogService.add(blog);
        ctx.body = {
            tag: 'success',
            status: 1,
            message: '添加成功!'
        };
    } catch (err) {
        console.error(`add error: ${err}`);
        ctx.body = {
            tag: 'error',
            status: err.status,
            message: err.message,
        }
    }
}

const list = async(ctx, next) => {
    let conditions = { "state": "published" };
    let fields = { _id: 0 };
    let options = { skip: 0, limit: 2 };
    try {
        const result = await blogService.list(conditions, fields, options);

        const resultByName = await blogService.findByName('宝宝', (err, blogs) => {
            if (err) console.error(`err: ${err.message}`);
            console.log(`blogs: ${blogs}`);
        });
        ctx.body = {
            tag: 'success',
            status: 1,
            message: '查询成功!',
            data: result,
        }
        console.log(`result: ${result}`);
    } catch (err) {
        console.error(`list error: ${err}`);
        ctx.body = {
            tag: 'error',
            status: err.status,
            message: err.message,
        }
    }

    console.log(444)

}

export default {
    add,
    list
}