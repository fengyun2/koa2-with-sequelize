/*
 * @Author: fengyun2
 * @Date:   2016-08-16 10:24:20
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-28 21:07:11
 */
'use strict'

import { db, Schema } from './mongodb'

/**
 * Blog Schema
 */
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: '',
        trim: true,
    },
    slug: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        default: 'published'
    },
    // 置顶 0: 不置顶, 1: 置顶
    top: {
        type: Number,
        required: true,
        default: 0,
    },
    content: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true,
        ref: 'Users'
    },
    updatedAt: {
        type: Number,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: true,
        ref: 'Users'
    }
})

// TODO:

/**
 * Validations
 */


/**
 * Middleware
 */


/**
 * Pre-save hook
 */
BlogSchema.pre('save', (next) => {
    console.log(`亲, 你正在保存文章...`)
    next()
})
/**
 * Pre-remove hook
 */
BlogSchema.pre('remove', (next) => {
    next()
})


/**
 * Methods
 */
BlogSchema.methods = {

}


/**
 * Statics
 */
BlogSchema.statics = {
    findByName(name, cb) {
        this.find({ title: new RegExp(name, 'i') }, cb)
    }
}

export default db.model('Blogs', BlogSchema)