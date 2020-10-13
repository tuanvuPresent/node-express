'use strict';
const todoCtr = require('./controler');
// const isAuth = require('../auth/auth').isAuth
const express = require('express')
const router = express.Router()

// router.post('/todos', isAuth, todoCtr.create)
// router.get('/todos', isAuth, todoCtr.get)
// router.get('/todos/:id', isAuth, todoCtr.detail)
// router.put('/todos/:id', isAuth, todoCtr.update)
// router.delete('/todos/:id', isAuth, todoCtr.destroy)

router.post('/todos', todoCtr.create)
router.get('/todos', todoCtr.get)
router.get('/todos/:id', todoCtr.detail)
router.put('/todos/:id', todoCtr.update)
router.delete('/todos/:id', todoCtr.destroy)

module.exports = router
