const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password:'9818Iwb@wiw2326'
})

module.exports = pool.promise();