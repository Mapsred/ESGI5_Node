const express = require('express');
const User = require("../models/user").User;

const router = express.Router();

router.get('/', (req, res) => {

    User.find({_id: req.user.payload.id})
        .then((user) => res.send(user))
        .catch(() => res.sendStatus(404));
});

module.exports = router;