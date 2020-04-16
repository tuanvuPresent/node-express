const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//router
let ProductRouter = require('./api/products/Router') //importing route
ProductRouter(app)
let TodoRouter = require('./api/todos/Router') //importing route
TodoRouter(app)

//handle error
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

const port = process.env.PORT
app.listen(port)
console.log('REST ful API server started on: ' + port)
