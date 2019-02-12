const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    firstname: { type: String, min: 1, max: 50 },
    lastname: { type: String, min: 1, max: 50 },
    password: { type: String, min: 1 },
    createdAt: Date,
    editedAt: Date,
    isActive: Boolean,
    isDeleted: Boolean,
});

module.exports = db.model('User', userSchema);