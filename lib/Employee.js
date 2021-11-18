const inquirer = require("inquirer");

class Employee {
    constructor(empname,id,email) {
        this.empname=empname
        this.id=id
        this.email=email
    }
    getName(){
        console.log(this.empname)
        // inquirer
        //     .prompt([
        //         {
        //         type: "input",
        //         name: "empname",
        //         message: "Enter employee name."
        //         }
        //     ])
        //     .then((val) => {
        //         this.empname = empname.val
        //         return this.empname
        //     })
    }

    getId(){
        console.log(this.id)
        // inquirer
        //     .prompt([
        //         {
        //         type: "input",
        //         name: "id",
        //         message: "Enter employee id number."
        //         }
        //     ])
        //     .then(val => {
        //         return id.value
        //     })
    }

    getEmail(){
        console.log(this.email)
        // inquirer
        //     .prompt([
        //         {
        //         type: "input",
        //         name: "email",
        //         message: "Enter employee email."
        //         }
        //     ])
        //     .then(val => {
        //         return email.value
        //     })
    }

    // getRole()
}

module.exports = Employee