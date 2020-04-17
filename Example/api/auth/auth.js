const jwt = require('jsonwebtoken')
const key = 'jwt'
const model = require('../../models');
const User = model.user
const bcrypt = require('bcrypt')

const isAuth = async (req, res, next) => {
    let auth = req.header('Authorization').split(' ')

    if (auth.length !== 2 || auth[0] !== key) {
        return res.status(401).send({error: 'wrong format token'})
    }

    try {
        let token = auth[1]
        let data = jwt.decode(token)
        let userId = data.user_id
        let user = await User.findAll({
            where: {
                id: userId
            }
        });
        if (user.length === 0) throw Error
        req.user = user[0]
        next()
    } catch (e) {
        res.status(401).send({error: 'Not authorized to access this resource'})
    }
}

const authentication = async (username, password) => {
    let user = await User.findAll({
        where: {
            username: username,
        }
    })
    if (user.length > 0 && bcrypt.compareSync(password, user[0].password)) {
        return user[0]
    } else {
        return null
    }
}

module.exports = {
    isAuth: isAuth,
    authentication: authentication
}
