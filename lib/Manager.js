const Employee = require("./Employee")

class Manager extends Employee{
    constructor(empname,id,email,office) {
        super(empname,id,email)
        this.office=office
    }

    getOffice(){
        console.log(this.office)
        // inquirer
        //     .prompt([
        //         {
        //         type: "input",
        //         name: "office",
        //         message: "Enter office number."
        //         }
        //     ])
        //     .then(val => {
        //         return office.value
        //     })
    }

    getRole(){
        console.log("Manager") 
    }
}

module.exports = Manager