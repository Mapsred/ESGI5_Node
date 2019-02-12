const express = require('express');
const User = require("../models/user").User;

const router = express.Router();

router.post('/', (req, res) => {
    let email = req.body.email,
        firstname = req.body.firstname,
        lastname = req.body.lastname,
        password = req.body.password,
        messages = [];

    if(typeof email !== "string" || !email)
        messages.push('not email');

    if(typeof firstname !== "string" || !firstname)
        messages.push('not firstname');

    if(typeof lastname !== "string" || !lastname)
        messages.push('not lastname');

    if(typeof password !== "string" || !password)
        messages.push('not password');


    if(messages.length > 0){
        res.send(messages.join(', '));
    }

    if(messages.length === 0){
        const user = new User({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password
        });

        user.save().then(data => {
            res.send(data);
        });
    }
});

module.exports = router;