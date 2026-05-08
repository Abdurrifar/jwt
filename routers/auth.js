const express = require('express')
const { authC } = require('../controller/authC')
const routerC = express.Router()


routerC.post('/ok', authC)

module.exports = routerC