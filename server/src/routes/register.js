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
    let errorsStructure = {
        error: "Registration invalid",
        details: []
    };

    if (!errors.isEmpty()) {
        const errorsArray = errors.array();
        for(let i in errorsArray) {
            errorsStructure.details.push(errorsArray[i]);
        }
        return res.status(400).json(errorsStructure);
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword
    });

    user.save().then(data => {
        res.send(data);
    }).catch((error) => res.status(400).send({
        error: "Registration invalid",
        details: error
    }));
});

module.exports = router;