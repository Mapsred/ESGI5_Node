const express = require('express');
const User = require("../models/user").User;

const router = express.Router();

router.get('/', (req, res) => {

    User.find({ _id: req.user.payload.id })
        .then((user) => res.send(user))
        .catch(() => res.sendStatus(404));
});

router.post('/cart', (req, res) => {
    User.findOne({ _id: req.user.payload.id })
        .then((user) => {
            if (user.cart === undefined) {
                user.cart = [];
            }

            user.cart.push({
                product_id: req.body.product_id,
                price: req.body.price,
                picture_link: req.body.picture_link,
                description: req.body.description
            });

            user.save();

            res.send(user);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(404)
        });

});

module.exports = router;