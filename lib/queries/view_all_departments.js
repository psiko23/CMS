const db = require('../db.js');
const { printTable } = require('console-table-printer');

const viewAllDepartments = async () => {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM departments');
    console.log();
    console.log(`=======================================================================`);
    console.log(`                          Department Names                             `);
    console.log(`=======================================================================`);
    printTable(rows);
    console.log(`=======================================================================`);
  } catch (err) {
    console.error(`Error retrieving department list: ${err}`);
  }
};

module.exports = viewAllDepartments;
