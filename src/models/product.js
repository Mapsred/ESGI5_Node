const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    picture_link: String,
    quantity: Number

});

module.exports.Product = db.model('Product', productSchema);