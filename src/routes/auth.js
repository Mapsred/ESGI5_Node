const express = require('express');
const createToken = require('../libs/auth').createToken;
const router = express.Router();

router.post('/login_check', (req, res) => {
    console.log(req.body.email, req.body.password);



    if(req.body.email === 'user@user.fr' || req.body.password === 'password') {
        const token = createToken({
            id: "id",
        });
        res.send({
            token
        });
    } else {
        res.status(400).send({
            error: "Invalid username/password"
        });
    }
});

module.exports = router;