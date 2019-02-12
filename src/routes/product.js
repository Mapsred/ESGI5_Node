const express = require('express');
const Product = require("../models/product").Product;

const router = express.Router();

router.get('/', (req, res) => {
    Product.find().then(data => res.send(data));
});

router.get('/:title', (req, res) => {
    Product.findOne({ title: req.params.title }).then(data => res.send(data));
});

router.post('/', (req, res) => {
    const product = new Product({
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "picture_link": req.body.picture_link,
        "quantity": req.body.quantity
    });

    product.save().then(data => {
        res.status(201).send(data);
    }).catch(error => {
        let errors = [];
        for (let value in error.errors) {
            if (error.errors.hasOwnProperty(value)) {
                errors.push(error.errors[value]['message']);
            }
        }

        res.status(400).send(errors.join('\n'));
    });
});


module.exports = router;