const express = require('express');
const router = express.Router();
const categoryRoute = require('./categoryRoute.js')

router.get('/', (req, res) => {
    res.send("X")
})

router.use('/category', categoryRoute)

module.exports = router;