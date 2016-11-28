'use strict';var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var
MongoClient = require('mongodb').MongoClient,
assert = require('assert'),
config = require('../config/mongodb'),
ObjectID = require('mongodb').ObjectID;

var mongoLink = 'mongodb://' + config.host + ':' + config.port + '/' + config.database;

// 插入方法
var insert = function insert(collectionName, obj) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            collection.insert(obj, {
                w: 1 },
            function (err, res) {
                db.close();
                if (err) reject(err);else
                resolve(res[0]);
            });
        });
    });
};

// 更新
var update = function update(collectionName, obj) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            collection.update({
                _id: new ObjectID(obj._id) },
            obj, {
                upsert: true,
                w: 1 },
            function (err, res) {
                db.close();
                if (err) reject(err);else
                resolve(res);
            });
        });
    });
};

// 查找一个
var findOne = function findOne(collectionName, query, option) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            if (option == undefined || option == null) {
                collection.findOne(query, function (err, res) {
                    db.close();
                    if (err) reject(err);else
                    resolve(res);
                });
            } else {
                collection.findOne(query, option, function (err, res) {
                    db.close();
                    if (err) reject(err);else
                    resolve(res);
                });
            }
        });
    });
};

// 查找多个
var find = function find(collectionName, query, option) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            if (option == undefined || option == null) {
                collection.find(query).toArray(function (err, res) {
                    db.close();
                    if (err) reject(err);else
                    resolve(res);
                });
            } else {
                collection.find(query, option).toArray(function (err, res) {
                    db.close();
                    if (err) reject(err);else
                    resolve(res);
                });
            }
        });
    });
};

// 删除
var remove = function remove(collectionName, query) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            collection.remove(query, {
                w: 1 },
            function (err, res) {
                db.close();
                if (err) reject(err);else
                resolve(res);
            });
        });
    });
};

// 计数
var count = function count(collectionName, query, option) {
    return new _promise2.default(function (resolve, reject) {
        MongoClient.connect(mongoLink, function (err, db) {
            if (err) reject(err);
            var collection = db.collection(collectionName);
            if (option == undefined || option == null) {
                collection.count(query, function (err, count) {
                    db.close();
                    if (err) reject(err);else
                    resolve(count);
                });
            } else {
                collection.count(query, option, function (err, count) {
                    db.close();
                    if (err) reject(err);else
                    resolve(count);
                });
            }
        });
    });
};

module.exports.insert = insert;
module.exports.update = update;
module.exports.findOne = findOne;
module.exports.find = find;
module.exports.remove = remove;
module.exports.count = count;
//# sourceMappingURL=db.js.map