const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    picture_link: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: [
        { label: String }
    ]
});

module.exports.Product = db.model('Product', productSchema);