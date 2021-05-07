const express = require('express');
const router = express.Router();
const menuModel = require('../controllers/menuModel');

router.get('/', menuModel.toList)
router.get('/edit/:id', menuModel.editData)
router.get('/delete/:id', menuModel.delete)

router.post('/', menuModel.create)
router.post('/edit/:id', menuModel.update)

module.exports = router