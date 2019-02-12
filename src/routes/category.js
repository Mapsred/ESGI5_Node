const express = require('express');
const Category = require('../models/category').Category;

const router = express.Router();

router.get('/', (req, res) => {
    Category.find().then(data => res.send(data));
});

router.get('/:title', (req, res) => {
    Category.findOne({ title: req.params.title }).then(data => res.send(data));
});

module.exports = router;