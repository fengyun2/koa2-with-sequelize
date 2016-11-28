'use strict';exports.__esModule = true;

var _blogModel = require('../models/blogModel.js');var _blogModel2 = _interopRequireDefault(_blogModel);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var add = function add(blog) {
    return _blogModel2.default.save(blog);
}; ///<reference path="../../typings/index.d.ts" />

var list = function list(conditions, fields, options) {
    return _blogModel2.default.find(conditions, fields, options);
};

var findByName = function findByName(name, cb) {
    return _blogModel2.default.findByName(name, cb);
};exports.default =
{
    add: add,
    list: list,
    findByName: findByName };module.exports = exports['default'];
//# sourceMappingURL=blogService.js.map