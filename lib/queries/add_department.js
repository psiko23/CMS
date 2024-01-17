const inquirerFunction = require('../inquirer_functions');
const db = require('../db.js');
const { printTable } = require('console-table-printer');

const addDepartment = async () => {
    const query = new inquirerFunction('departmentName', 'input', 'What is the name of the department?',[]);
    const newDepartment = await query.ask();
    const departmentName = newDepartment.departmentName;
    try {
        await db.execute(`INSERT INTO departments (name) VALUES (?)`, [departmentName]);
        console.log(`Successfully added new department: ${departmentName}`);
    } catch(err) {
        console.error(`Error adding new department (${departmentName}): ${err}`);
    }
};

module.exports = addDepartment;