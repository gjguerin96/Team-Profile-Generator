const inquirer = require('inquirer');
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require('fs')



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

const introContent = (
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profiles</title>
</head>
<body>
    <header>
        <div id="title">
            <h1>Meet the Team</h1>
        </div>
    </header>

    <main>
        <div class="container">
    `
)

const endContent = (
    `
        </div>
    </main>

</body>
</html>
    `
)

fs.writeFile('./dist/index.html',introContent, (error) =>{
    if(error) {throw error}
    // console.log("it worked")
})

function finishGen() {
    fs.appendFile('./dist/index.html',endContent, (error) =>{
        if(error) {throw error}
    })
    console.log("Team profile Generated!")
}

function askForEngineer() {
    inquirer
        .prompt([
            basicQuestions[0],
            basicQuestions[1],
            basicQuestions[2],
            {
                type:'input',
                name: 'github',
                message: 'Enter github username.'
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.empname,answers.id,answers.email,answers.github);
            const engCard = engineer.engineerCard()
            fs.appendFile('./dist/index.html',engCard, (error) =>{
                if(error) {throw error}
            })
            whatNext()
        });
    
}

function askForIntern() {
    inquirer
        .prompt([
            basicQuestions[0],
            basicQuestions[1],
            basicQuestions[2],
            {
                type:'input',
                name: 'school',
                message: 'Enter school.'
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.empname,answers.id,answers.email,answers.school);
            const intCard = intern.internCard()
            fs.appendFile('./dist/index.html',intCard, (error) =>{
                if(error) {throw error}
            })
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
                finishGen()
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
            const manager = new Manager(answers.empname,answers.id,answers.email,answers.office);
            const manCard = manager.managerCard()
            fs.appendFile('./dist/index.html',manCard, (error) =>{
                if(error) {throw error}
            })
            whatNext()
        });
    
}

askForManager();