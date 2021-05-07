const express = require('express');
const router = express.Router();
const categoryRoute = require('./categoryRoute.js')
const menuRoute = require('./menuRoute.js')
const memberRoute = require('./memberRoute.js')
const userRoute = require('./userRoute.js')
const posRoute = require('./posRoute.js')
const authMiddleware = require('../helpers/authMiddleware.js')

router.get('/', (req, res) => {
        console.log(req.query.notif)
    res.render('login.ejs', {alert: req.query.notif})
})

router.use('/category', authMiddleware, categoryRoute)
router.use('/menus', authMiddleware, menuRoute)
router.use('/members', authMiddleware, memberRoute)
router.use('/pos', authMiddleware, posRoute)
router.use('/users',  userRoute)

module.exports = router;