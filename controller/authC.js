
const authC = (req, res) => {
    const { username = null, password = null } = req.body || {}
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')
    if (!username || !password) { return res.send('required') }
    if (username !== 'adam') { return res.send('invalid username') }
    const encryptedPassword = bcrypt.hashSync(password, 6)
    if (!bcrypt.compareSync('12345', encryptedPassword)) { return res.send('password not match') }


    const token = jwt.sign({ username, role: 'adam' }, process.env.SECRET_RANDOM_CODE, { expiresIn: '5h' })

    res.json({

        token
    })
}



const checkAuthC = (req, res) => {
    const user = req.user
    if (!user) { return res.send('user is not found') }

    res.json({
        message: 'user authenticated',
        user
    })
};


module.exports = { authC, checkAuthC }