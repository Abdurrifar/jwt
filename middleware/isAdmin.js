const jwt = require('jsonwebtoken')

const isAdmn = (req, res, next) => {
    const user = req.user
    // res.json({
    //     user
    // })
    if (!user) { return res.send('user is not authorized') }
    if (user.role !== 'adam') { return res.send('user is not admin') }

    next()
}

module.exports = isAdmn