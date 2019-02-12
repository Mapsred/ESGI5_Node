const express = require('express');
const Product = require("../models/product").Product;

const router = express.Router();

router.get('/', (req, res) => {
    Product.find().then(data => res.send(data));
});

router.get('/:title', (req, res) => {
    Product.findOne({title: req.params.title}).then(data => res.send(data));
});


module.exports = router;