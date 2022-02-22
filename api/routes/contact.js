
const express = require('express');
const router = express.Router();

router.get('/contact', function (req, res, next) {
    res.send("contact page");
})

module.exports = router;