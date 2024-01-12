const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Qaz123@269',
        database: 'employee_management_db'
    },
    console.log(`Connected to the registrar_db database.`)
);

module.exports = db;