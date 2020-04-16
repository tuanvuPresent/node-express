'use strict';

const mysql = require('mysql');

//local mysql db connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
// connect to database
db.connect(err => {
    if (err) {
        console.log(err);
    }
})

module.exports = db;