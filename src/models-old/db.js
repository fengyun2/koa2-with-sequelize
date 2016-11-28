const
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    config = require('../config/mongodb'),
    ObjectID = require('mongodb').ObjectID

const mongoLink = `mongodb://${config.host}:${config.port}/${config.database}`

// 插入方法
const insert = (collectionName, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            collection.insert(obj, {
                w: 1
            }, (err, res) => {
                db.close()
                if (err) reject(err)
                else resolve(res[0])
            })
        })
    })
}

// 更新
const update = (collectionName, obj) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            collection.update({
                _id: new ObjectID(obj._id)
            }, obj, {
                upsert: true,
                w: 1
            }, (err, res) => {
                db.close()
                if (err) reject(err)
                else resolve(res)
            })
        })
    });
}

// 查找一个
const findOne = (collectionName, query, option) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            if (option == undefined || option == null) {
                collection.findOne(query, (err, res) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(res)
                })
            } else {
                collection.findOne(query, option, (err, res) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(res)
                })
            }
        })
    })
}

// 查找多个
const find = (collectionName, query, option) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            if (option == undefined || option == null) {
                collection.find(query).toArray((err, res) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(res)
                })
            } else {
                collection.find(query, option).toArray((err, res) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(res)
                })
            }
        })
    });
}

// 删除
const remove = (collectionName, query) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            collection.remove(query, {
                w: 1
            }, (err, res) => {
                db.close()
                if (err) reject(err)
                else resolve(res)
            })
        })
    })
}

// 计数
const count = (collectionName, query, option) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoLink, (err, db) => {
            if (err) reject(err)
            const collection = db.collection(collectionName)
            if (option == undefined || option == null) {
                collection.count(query, (err, count) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(count)
                })
            } else {
                collection.count(query, option, (err, count) => {
                    db.close()
                    if (err) reject(err)
                    else resolve(count)
                })
            }
        })
    })
}

module.exports.insert = insert
module.exports.update = update
module.exports.findOne = findOne
module.exports.find = find
module.exports.remove = remove
module.exports.count = count
