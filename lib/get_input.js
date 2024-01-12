const inquirer = require('inquirer');

const getUserInput = async function() {

    const answers = await inquirer.prompt([
        {
            "name": "method",
            "type": "list",
            "message": "What would you like to do?",
            "choices": ['View all departments',
                        'View all roles',
                        'View all employees',
                        'Add a department','Add a role',
                        'Add an employee',
                        'Update an employee role']
        }

    ]);

    const method = answers.method;

    console.log(`${method}`);

}

module.exports = getUserInput;