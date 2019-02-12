const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;

const movieDetailsSchema = new Schema({
    title: String,
    year: { type: Number, min: 1850 },
    released: Date
});

module.exports.Movie = db.model('Movie', movieDetailsSchema);