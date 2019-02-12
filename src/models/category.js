const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    label: String,
    visible: Boolean,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports.Category = db.model('Category', categorySchema);