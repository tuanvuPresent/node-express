'use strict';
const todoCtr = require('./controler');
const isAuth = require('../auth/auth').isAuth
const express = require('express')
const router = express.Router()

router.post('/todos', isAuth, todoCtr.create)
router.get('/todos', isAuth, todoCtr.get)
router.get('/todos/:id', isAuth, todoCtr.detail)
router.put('/todos/:id', isAuth, todoCtr.update)
router.delete('/todos/:id', isAuth, todoCtr.destroy)

module.exports = router