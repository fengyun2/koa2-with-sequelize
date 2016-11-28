///<reference path="../../typings/index.d.ts" />

import Blog from '../models/blogModel.js';

const add = (blog) => {
    return Blog.save(blog);
};

const list = (conditions, fields, options) => {
    return Blog.find(conditions, fields, options);
};

const findByName = (name, cb) => {
    return Blog.findByName(name, cb);
}
export default {
    add,
    list,
    findByName,
};