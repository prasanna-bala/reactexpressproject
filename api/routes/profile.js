

const express = require('express');
const router = express.Router();

router.get('/profile', function (req, res, next) {
    res.send("profile page");
})

module.exports = router;