'use strict';exports.__esModule = true;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);

var _blogSchema = require('../schema/blogSchema.js');var _blogSchema2 = _interopRequireDefault(_blogSchema);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/*class Blog {
                                                                                                                                                                                                              constructor(db = null, blog = {}) {
                                                                                                                                                                                                                      this.db = db
                                                                                                                                                                                                          
                                                                                                                                                                                                                      this.blog = {}
                                                                                                                                                                                                                      this.blog.title = blog.title || null
                                                                                                                                                                                                                  }
                                                                                                                                                                                                          
                                                                                                                                                                                                              save(blog) {
                                                                                                                                                                                                                  const action = new blogModel(blog)
                                                                                                                                                                                                                  return new Promise((resolve, reject) => {
                                                                                                                                                                                                                      action.save(function(err, result) => {
                                                                                                                                                                                                                          if (err) {
                                                                                                                                                                                                                              return reject({ err: err.errors, message: err.message, code: -99 })
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                          return resolve(result)
                                                                                                                                                                                                                      })
                                                                                                                                                                                                                  })
                                                                                                                                                                                                              }
                                                                                                                                                                                                              find(conditions, fields, options) {
                                                                                                                                                                                                                  // exec 返回promise实例
                                                                                                                                                                                                                  return blogModel.find(conditions, fields, options).exec()
                                                                                                                                                                                                              }
                                                                                                                                                                                                          }
                                                                                                                                                                                                          */

/**
                                                                                                                                                                                                              * 【添加blog】
                                                                                                                                                                                                              * @param blog {object}
                                                                                                                                                                                                              */
var save = function save(blog) {
    var action = new _blogSchema2.default(blog);
    return new _promise2.default(function (resolve, reject) {
        action.save(function (err, result) {
            if (err) {
                return reject({ err: err.errors, message: err.message, status: -99 });
            }
            return resolve(result);
        });
    });
};

/**
    * 【查询所有blog】
    * @param conditions {object} 查询条件
    * @param fields     {object} 过滤字段
    * @param options    {object} 其他操作
    */ // /<reference path="../../typings/index.d.ts" />
var find = function find(conditions, fields, options) {
    //exec 返回promise实例
    return _blogSchema2.default.find(conditions, fields, options).exec();
};

/**
    * 【根据名称查找】
    */
var findByName = function findByName(name, cb) {
    return _blogSchema2.default.findByName(name, cb);
};exports.default =

{
    save: save,
    find: find,
    findByName: findByName };module.exports = exports['default'];
//# sourceMappingURL=blogModel.js.map