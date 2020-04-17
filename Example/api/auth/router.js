'use strict';

let authCtrl = require('./controler');
const express = require('express')
const router = express.Router()

router.post('auth/login', authCtrl.login)
router.post('auth/register', authCtrl.register)

module.exports = router