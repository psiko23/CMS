const viewAllDepartments = require('./lib/queries/view_all_departments');
const viewAllRoles = require('./lib/queries/view_all_roles');
const viewAllEmployees = require('./lib/queries/view_all_employees');
const addDepartment = require('./lib/queries/add_department');
const addEmployee = require('./lib/queries/add_employee');
const addRole = require('./lib/queries/add_role');
const updateRole = require('./lib/queries/update_employee_role');

const inquirerFunction = require('./lib/inquirer_functions');

const startApp = async () => {
    
    const query = new inquirerFunction('action', 
                     'list', 
                     'What would you like to do?',

                     ['View all departments', 
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',]
    );
    const answer = await query.ask();
    const action = answer.action;

    if(action === 'View all departments') {
        await viewAllDepartments();
    }
    if(action === 'View all roles') {
        await viewAllRoles();
    }
    if(action === 'View all employees') {
        await viewAllEmployees();
    }
    if(action === 'Add a department') {
        await addDepartment();
    }
    if(action === 'Add a role') {
        await addRole();
    }
    if(action === 'Add an employee') {
        await addEmployee();
    }
    if(action === 'Update an employee role') {
        await updateRole();
    }
    if(action === 'Exit') {
        console.log('Goodbye... (ctrl + c)')
        return;
    }
    startApp();
};

startApp();