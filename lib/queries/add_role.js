const inquirerFunction = require('../inquirer_functions');
const db = require('../db.js');

const addRole = async () => {
    try {

        const [departments] = await db.execute(`SELECT * FROM departments`);

        const roleInquirer = new inquirerFunction('role', 'input', 'What is the name of the role?', []);
        const salaryInquirer = new inquirerFunction('salary', 'input', 'What will be the salary?', []);
        const departmentInquirer = new inquirerFunction('department', 'list','What department should it be in?', departments);
        
        const newRole = await roleInquirer.ask();
        const income = await salaryInquirer.ask();

        const inDepartment = await departmentInquirer.ask();
        const selectedDepartment = inDepartment.department;

        const departmentIDQuery = await db.execute(`SELECT id FROM departments WHERE name = ?`, [selectedDepartment]);
        const departmentID = departmentIDQuery[0][0].id;

        await db.execute(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,[newRole.role, income.salary, departmentID]);
        console.log(`Successfully added new role to the ${selectedDepartment} Department: ${newRole.role} `);
    } catch(err) {
        console.error(`Error adding role: ${err}`);
    }
}

module.exports = addRole;