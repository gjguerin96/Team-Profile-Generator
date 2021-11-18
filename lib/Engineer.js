const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(empname,id,email,github) {
        super(empname,id,email)
        this.github=github
    }

    getGithub(){
        console.log(this.github)
    }

    getRole(){
        console.log("Engineer") 
    }
}

module.exports = Engineer