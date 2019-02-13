const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports.Cart = db.model('Cart', cartSchema);