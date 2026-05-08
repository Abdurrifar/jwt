const express = require('express')
const { userC } = require('../controller/userC')
const router = express.Router()


router.get('/ok', userC)

module.exports = router
