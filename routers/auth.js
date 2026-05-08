const express = require('express')
const { authC, checkAuthC } = require('../controller/authC')
const isControlled = require('../middleware/isControlled')
const isAdmn = require('../middleware/isAdmin')
const routerC = express.Router()


routerC.post('/ok', authC)

routerC.get('/checkAuth', isControlled, isAdmn, checkAuthC)


module.exports = routerC