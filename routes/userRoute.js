const express = require('express');
const router = express.Router();
const userModel = require('../controllers/userModel.js');

router.get('/', userModel.toList)
router.get('/edit/:id', userModel.editData)
router.get('/delete/:id', userModel.delete)

router.post('/login', userModel.login)
router.post('/', userModel.create)
router.post('/edit/:id', userModel.update)

module.exports = router