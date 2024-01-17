const inquirer = require('inquirer');

class inquirerFunction {
    constructor(name, type, message, choices) {
        this.name = name,
        this.type = type,
        this.message = message,
        this.choices = choices
    }

    ask() {
        return inquirer.prompt([
            {
                name: this.name,
                type: this.type,
                message: this.message,
                choices: this.choices,
            }]
        )
    }
};

// const newprompt = new inquirerFunction('exampleName', 'list','Select an option', ['option1','option2']);

// newprompt.ask().then(answer => {
//     console.log(`user selected: ${answer.exampleName}`)
// });

module.exports = inquirerFunction;