const express = require('express');
const User = require("../models/user").User;

const router = express.Router();

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    });

    user.save().then(data => {
        res.send(data);
    }).catch((error) => res.status(400).send({
        error: "Registration invalid",
        details: error
    }));
});

module.exports = router;