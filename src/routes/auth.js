const express = require('express');
const createToken = require('../libs/auth').createToken;
const router = express.Router();
const User = require('../models/user').User;

router.post('/login_check', (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password}).then(
        (user) => {
            if(user) {
                const token = createToken(user);
                res.send({
                    token
                });
            } else {
                res.status(400).send({
                    error: "Invalid username/password"
                });
            }
        });
});

module.exports = router;