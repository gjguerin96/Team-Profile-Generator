const inquirer = require("inquirer");
const fs = require('fs')

class Employee {
    constructor(empname,id,email) {
        this.empname=empname
        this.id=id
        this.email=email
    }
    getName(){
        return this.empname
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
}

module.exports = Employee