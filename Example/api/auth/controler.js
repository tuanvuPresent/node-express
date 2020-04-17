'use strict'

let jwt = require('jsonwebtoken')
const {authentication} = require("./auth");
const User = require('../../models').user;
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    let data = req.body
    let username = data.username
    let password = data.password

    if (!username || !password) {
        return res.status(400).send({error: 'username or password is required'})
    }

    let user = await authentication(username, password)
    if (user) {
        let token = jwt.sign({'user_id': user.id}, process.env.SECURITY_KEY)
        res.json({token: token})
    } else {
        res.status(401).send({error: 'invalid username or password'})
    }
}

const register = async (req, res) => {
    let data = req.body
    let username = data.username
    let password = data.password

    if (!username || !password) {
        return res.status(400).send({error: 'username or password is required'})
    }

    let user = await User.findAll({
        where: {
            username: username
        }
    })
    if (user.length > 0) {
        return res.status(400).send({error: 'username is exist'})
    }

    User.create({
        username: username,
        password: bcrypt.hashSync(password, 10)
    })
    res.json('create success')
}

module.exports = {
    login: login,
    register: register
}