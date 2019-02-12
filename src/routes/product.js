const express = require('express');
const Product = require("../models/product").Product;

const router = express.Router();

router.get('/', (req, res) => {
    Product.find().then(data => res.send(data));
});


module.exports = router;