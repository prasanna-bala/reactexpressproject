
const express = require('express');
const router = express.Router();

router.get('/View user', function (req, res, next) {
    res.send("view user page");
})

module.exports = router;