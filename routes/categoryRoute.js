const express = require('express');
const router = express.Router();
const categoryModel = require('../controllers/categoryModel.js');

router.get('/', categoryModel.toList)
router.get('/newdata', categoryModel.newData)
router.get('/editdata/:id', categoryModel.editData)
router.get('/delete/:id', categoryModel.delete)

router.post('/newdata', categoryModel.create)
router.get('/editdata/:id', categoryModel.editData)

module.exports = router