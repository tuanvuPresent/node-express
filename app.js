const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//router
// const routes = require('./api/router');
// app.use('', routes);

//handle error
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

const port = process.env.PORT || 3332
app.listen(port)
console.log('REST ful API server started on: ' + port)
