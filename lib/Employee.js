const inquirer = require("inquirer");

class Employee {
    constructor(name,id,email) {
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){
        inquirer
            .prompt([
                {
                type: "input",
                name: "empname",
                message: "Enter employee name."
                }
            ])
            .then(val => {
                return empname.value
            })
    }

    getId(){
        inquirer
            .prompt([
                {
                type: "input",
                name: "id",
                message: "Enter employee id number."
                }
            ])
            .then(val => {
                return id.value
            })
    }

    getEmail(){
        inquirer
            .prompt([
                {
                type: "input",
                name: "email",
                message: "Enter employee email."
                }
            ])
            .then(val => {
                return email.value
            })
    }

    getRole()
}

module.exports = Employee