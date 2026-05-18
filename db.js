const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'usersdb'
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Connected to MySQL');
});

module.exports = db;