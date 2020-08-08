const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'tes_db nodejs',
    multipleStatements: true
});

db.connect(function(err) {
    if (err) throw err;
    else {
        console.log('Connected!');
    }
});

module.exports = db;
