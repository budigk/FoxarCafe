const express = require('express');
const router = express.Router();
const memberModel = require('../controllers/memberModel.js');

router.get('/', memberModel.toList)
router.get('/edit/:id', memberModel.editData)
router.get('/delete/:id', memberModel.delete)

router.post('/', memberModel.create)
router.post('/edit/:id', memberModel.update)

module.exports = router