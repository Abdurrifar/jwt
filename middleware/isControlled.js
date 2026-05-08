const jwt = require('jsonwebtoken')


const isControlled = (req, res, next) => {
    const headers = req.headers['authorization'];
    const jwt = require('jsonwebtoken')

    if (!headers) {
        return res.status(401).send('Authorization header missing');
    }

    const bearer = headers.split(' ')[0];
    const token = headers.split(' ')[1];
    const PORT = process.env.SECRET_RANDOM_CODE


    try {
        const decode = jwt.verify(token, PORT)


        req.user = decode
        next()

    } catch (err) {
        res.send(`err ${headerToken} ${bearer}`);

    }
}

module.exports = isControlled 