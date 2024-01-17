const db = require('../db.js');
const { printTable } = require('console-table-printer');

const viewAllRoles = async () => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM roles');
        console.log();
        console.log(`=======================================================================`);
        console.log(`                                Roles                                  `);
        console.log(`=======================================================================`);
        printTable(rows);
        console.log(`=======================================================================`);
    } catch(err) {
        console.error(`Error retrieving role list: ${err}`);
    }
};

module.exports = viewAllRoles;