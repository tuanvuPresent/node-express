'use strict';
const productCtrl = require('./controler');
const express = require('express')
const router = express.Router()

router.post('/products', productCtrl.create)
router.get('/products', productCtrl.get)
router.get('/products/:id', productCtrl.detail)
router.put('/products/:id', productCtrl.update)
router.delete('/products/:id', productCtrl.delete)

module.exports = router