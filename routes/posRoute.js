const express = require('express');
const router = express.Router();
const menuModel = require('../controllers/menuModel');
const posModel = require('../controllers/posModel');

router.get('/', menuModel.pos)
router.get('/pesan/:id', posModel.pesan)

module.exports = router