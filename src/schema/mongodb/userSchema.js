/*
 * @Author: fengyun2
 * @Date:   2016-08-16 10:24:30
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-16 10:50:26
 */
///<reference path="../../typings/index.d.ts" />
'use strict';

import { db, Schema } from './mongodb';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    headImg: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        default: 'active',
    },
    location: {
        type: String,
        required: false
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Number,
        default: Date.now
    }
});

export default db.model('Users', UserSchema);