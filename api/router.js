'use strict';

const express = require('express')
const router = express.Router()

router.use('', require('./todos/router'))
router.use('', require('./products/router'))
router.use('', require('./auth/router'))

module.exports = router