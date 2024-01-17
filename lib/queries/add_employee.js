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
        // console.log(roleName.role);
        const [idQuery] = await db.execute(`SELECT id FROM roles WHERE title = ?`, [roleName.role]);
        console.log(idQuery);
        const roleID = idQuery.length > 0 ? idQuery[0].id : null;

        const [departmentIdQuery] = await db.execute(`SELECT department_id FROM roles where id = ?`, [roleID]);
        const departmentID = departmentIdQuery.length > 0 ? departmentIdQuery[0].department_id : null;
        console.log(departmentID);

        const [managersList] = await db.execute(`SELECT id, first_name, last_name FROM managers WHERE over_department = ?`, [departmentID]);
        const managerInquirer = new inquirerFunction('manager', 'list', 'Who will be their manager?', managersList.map(manager => `${manager.first_name} ${manager.last_name}`));
        const managerName = await managerInquirer.ask();

        const selectedManager = managersList.find(manager => `${manager.first_name} ${manager.last_name}` === managerName.manager);
        const managerID = selectedManager ? selectedManager.id : null;

        await db.execute(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,[employeeName[0], employeeName[1], roleID, managerID || null]);
        console.log(`New employee added: ${employeeName}`);
    } catch(err) {
        console.error(`Error adding new employee: ${err}`);
    }
};

module.exports = addEmployee;