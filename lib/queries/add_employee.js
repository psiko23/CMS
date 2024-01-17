const inquirerFunction = require('../inquirer_functions');
const db = require('../db.js');

const addEmployee = async () => {

    try {

        const firstNameInquirer = new inquirerFunction('employeeFirstName', 'input', `What is the new employees first name?`, []);
        const lastNameInquirer = new inquirerFunction('employeeLastName', 'input', 'What is their last name?', []);

        const name1 = await firstNameInquirer.ask();
        const name2 = await lastNameInquirer.ask();

        const employeeName = [name1.employeeFirstName, name2.employeeLastName];

        const [roleList] = await db.execute(`SELECT * FROM roles`);
        const roleInquirer = new inquirerFunction('role', 'list', 'What is their role?', roleList.map(role => role.title));
        const roleName = await roleInquirer.ask();
        const [idQuery] = await db.execute(`SELECT id FROM roles WHERE title = ?`, [roleName.role]);
        const roleID = idQuery[0].id;

        const [departmentIdQuery] = await db.execute(`SELECT department_id FROM roles where id = ?`, [roleID]);
        const departmentID = departmentIdQuery[0].department_id;

        const [managersList] = await db.execute(`SELECT id, first_name, last_name FROM managers WHERE over_department = ?`, [departmentID]);
        const managerInquirer = new inquirerFunction('manager', 'list', 'Who will be their manager?', managersList.map(manager => `${manager.first_name} ${manager.last_name}`));
        const managerName = await managerInquirer.ask();

        const selectedManager = managersList.find(manager => `${manager.first_name} ${manager.last_name}` === managerName.manager);
        const managerID = selectedManager.id;

        await db.execute(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,[employeeName[0], employeeName[1], roleID, managerID]);
        console.log(`New employee added: ${employeeName[0]} ${employeeName[1]} as a/an ${roleName.role} under ${selectedManager.first_name} ${selectedManager.last_name}`);
    } catch(err) {
        console.error(`Error adding new employee: ${err}`);
    }
};

module.exports = addEmployee;