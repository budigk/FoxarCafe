const express = require('express');
const router = express.Router();
const categoryModel = require('../controllers/categoryModel.js');

router.get('/', categoryModel.toList)
router.get('/edit/:id', categoryModel.editData)
router.get('/delete/:id', categoryModel.delete)

router.post('/', categoryModel.create)
router.post('/edit/:id', categoryModel.update)

module.exports = router