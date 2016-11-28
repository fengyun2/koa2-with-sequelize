const ObjectID = require('mongodb').ObjectID,
    mongodb = require('./db')

module.exports = {
    // 创建
    insert: async function(obj) {
        const res = await mongodb.insert(this.collectionName, obj)
        return res
    },

    // 更新
    update: async function(obj) {
        const res = await mongodb.update(this.collectionName, obj)
        return res
    },

    // 删除
    remove: async function(id) {
        const res = await mongodb.remove(this.collectionName, {
            _id: new ObjectID(id)
        })
        return res
    },

    // 查询多条
    find: async function(query, option) {
        const res = await mongodb.find(this.collectionName, query, option)
        return res
    },

    // 查询单条
    findOne: async function(query, option) {
        const res = await mongodb.findOne(this.collectionName, query, option)
        return res
    },

    // 获取全部
    getAll: async function() {
        const res = await mongodb.find(this.collectionName, {})
    },

    // 按id查询
    getById: async function(id) {
        const res = await mongodb.findOne(this.collectionName, {
            _id: new ObjectID(id)
        })
    },

    // 按照很多id来查询
    getByIds: async function(ids, option) {
        ids = ids.map(function (id) {
            new ObjectID(id)
        })
        const res = await mongodb.find(this.collectionName, {
            _id: {
                $in: ids
            }
        }, option)
        return res
    },

    // 列出(带分页)
    getByPage: async function(query, sort, pageSize, pageNum) {
        if (!query) query = {}
        if (!sort) sort = [
            ['_id', 'desc']
        ]
        const option = {
            sort: sort,
            limit: pageSize,
            skip: (pageNum - 1) * pageSize
        }
        const res = await mongodb.find(this.collectionName, query, option)
        return res
    },

    // 计数
    count: async function(query) {
        if (!query) query = {}
        const res = await mongodb.count(this.collectionName, query)
    }
}
