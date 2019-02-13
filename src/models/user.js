const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    firstname: { type: String, min: 1, max: 50, required: true },
    lastname: { type: String, min: 1, max: 50, required: true },
    password: { type: String, min: 6, max: 255, required: true },
    createdAt: { type: Date, default: Date.now },
    editedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    cart: [{
        price: Number,
        quantity: Number,
        picture_link: String,
        description: String
    }]

});

module.exports.User= db.model('User', userSchema);