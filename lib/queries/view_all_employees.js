const db = require('../db.js');
const { printTable } = require('console-table-printer');

const viewAllEmployees = async () => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM employees`);
        console.log();
        console.log(`=======================================================================`);
        console.log(`                              Employees                                `);
        console.log(`=======================================================================`);
        printTable(rows);
        console.log(`=======================================================================`);
    } catch(err) {
        console.error(`Error retrieving employee data: ${err}`);
    }
}

module.exports = viewAllEmployees;