const express = require('express');
const User = require("../models/user").User;
const bcrypt = require('bcryptjs');
const { check, validationResult, body } = require('express-validator/check');
const router = express.Router();

router.post('/', [
    check('email').not().isEmpty().isString().isEmail(),
    check('firstname').not().isEmpty().isString(),
    check('lastname').not().isEmpty().isString(),
    check('password').not().isEmpty().isString(),
    check('passwordCheck').not().isEmpty().isString(),
    body('passwordCheck').custom((value, { req }) => {
        if (value === req.body.password) {
            return true;
        }
        throw new Error('Password confirmation does not match password');
    })
], (req, res) => {
    const errors = validationResult(req);
    let errorsTemplate = {
        error: "Registration invalid",
        details: []
    };

    console.log(errors.array());

    if (!errors.isEmpty()) {
        const errorsArray = errors.array();
        for(let i in errorsArray) {
            errorsTemplate.details.push(errorsArray[i]);
        }
        return res.status(400).json(errorsTemplate);
    }

    // if (req.body.password !== req.body.passwordCheck) {
    //     const detail = {
    //         location: 'body',
    //         param: 'password',
    //         value: req.body.password,
    //         msg: 'Password confirmation does not match password'
    //     };
    //     errorsTemplate.details.push(detail);
    //     return res.status(400).json(errorsTemplate);
    // }

    const user = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        passwordCheck: req.body.passwordCheck
    });

    user.save().then(data => {
        res.send(data);
    }).catch((error) => res.status(400).send({
        error: "Registration invalid",
        details: error
    }));
});

module.exports = router;