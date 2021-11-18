const inquirer = require('inquirer');
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")

// const employee = new Employee();
// const manager = new Manager();


const basicQuestions = [
    {
        type:'input',
        name: 'empname',
        message: 'Enter name.'
    },
    {
        type:'input',
        name: 'id',
        message: 'Enter id number.'
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter email address.'
    },
]

function askForEngineer() {
    inquirer
        .prompt([
            basicQuestions[0],
            basicQuestions[1],
            basicQuestions[2],
            {
                type:'input',
                name: 'github',
                message: 'Enter github url.'
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.empname,answers.id,answers.email,answers.github);
            engineer.getName()
            engineer.getId()
            engineer.getEmail()
            engineer.getGithub()
            engineer.getRole()
            whatNext()
        });
    
}

function whatNext() {
    inquirer
        .prompt([
            {
                type:'list',
                name: 'next',
                message: 'What do you want to do next?',
                choices: ['Add an engineer','Add an intern','Finish building my team']
            }  
        ])
        .then((answer) => {
            if (answer.next === 'Add an engineer'){
                askForEngineer()
            }
            else if (answer.next === 'Add an intern'){
                askForIntern()
            }
            else {
                console.log('still working on this one')
            }
        });
}

function askForManager() {
    inquirer
        .prompt([
            {
                type:'input',
                name: 'empname',
                message: 'Enter manager name.'
            },
            basicQuestions[1],
            basicQuestions[2],
            {
                type:'input',
                name: 'office',
                message: 'Enter manager office number.'
            }
        ])
        .then((answers) => {
            const mang = new Manager(answers.empname,answers.id,answers.email,answers.office);
            mang.getName()
            mang.getId()
            mang.getEmail()
            mang.getOffice()
            mang.getRole()
            whatNext()
        });
    
}

askForManager();