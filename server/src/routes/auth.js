const express = require('express');
const createToken = require('../libs/auth').createToken;
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user').User;
const { check, validationResult } = require('express-validator/check');

router.post('/login_check',[
    check('email').not().isEmpty().isString().isEmail(),
    check('password').not().isEmpty().isString()
], (req, res) => {
    const errors = validationResult(req);
    let errorsStructure = {
        error: "Login invalid",
        details: []
    };
    if (!errors.isEmpty()) {
        const errorsArray = errors.array();
        for(let i in errorsArray) {
            errorsStructure.details.push(errorsArray[i]);
        }
        return res.status(400).json(errorsStructure);
    }

    User.findOne({email: req.body.email}).then(
        (user) => {
            if(user && bcrypt.compareSync(req.body.password, user.password)) {
                const token = createToken(user);
                res.send({
                    token
                });
            } else {
                res.status(400).send({
                    error: "Invalid username/password",
                    details: [
                        {param: 'email', msg: 'Invalid email'},
                        {param: 'password', msg: 'Invalid password'}
                    ]
                });
            }
        });
});

module.exports = router;