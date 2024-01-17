const inquirerFunction = require('../inquirer_functions');
const db = require('../db.js');
const { printTable } = require('console-table-printer');

const updateRole = async () => {
    try {
        const selectEmployeeInquirer = new inquirerFunction('employee', 'input', 'Please enter the ID of the employee you wish to modify ->', []);
        const selectedEmployee = await selectEmployeeInquirer.ask();
        // console.log(selectedEmployee);
        const findEmployee = await db.execute(`SELECT id, first_name, last_name, role_id, manager_id FROM employees WHERE id = ?`, [selectedEmployee.employee]);
        printTable(findEmployee[0]);

        const confirm = new inquirerFunction('check', 'list', 'Is this the right employee?',['yes', 'no'])
        const correct = await confirm.ask();
        if(correct.check === 'no') {
            return;
        }
        const [roles] = await db.execute(`SELECT * FROM roles`);
        // console.log(roles)
        const roleChange = new inquirerFunction('roleTitle', 'list', 'What is their new role?', roles.map(role => `${role.title}`))
        const newRole = await roleChange.ask();
        const findRole = await db.execute(`SELECT id, department_id FROM roles WHERE title = ?`, [newRole.roleTitle]);
        // console.log(findRole);

        const [departments] = await db.execute(`SELECT id FROM departments WHERE id = ?`, [findRole[0][0].department_id]);
        // console.log(departments[0].id);

        const [managers] = await db.execute(`SELECT first_name, last_name, id FROM managers WHERE over_department = ?`, [departments[0].id]);
        // console.log(managers);
        const managerInquirer = new inquirerFunction('newManager','list','Who will be their new manager?', managers.map(manager => `${manager.first_name} ${manager.last_name}`));
        const managerChange = await managerInquirer.ask();
        const selectedManager = managers.find(manager => `${manager.first_name} ${manager.last_name}` === managerChange.newManager);
        // console.log(selectedManager);

        await db.execute(`UPDATE employees SET role_id = ?, manager_id = ? WHERE id = ?`, [findRole[0][0].id, selectedManager.id, selectedEmployee.employee]);

    } catch(err) {
        console.error(`Error updating employee role: ${err}`);
    }
}

module.exports = updateRole;