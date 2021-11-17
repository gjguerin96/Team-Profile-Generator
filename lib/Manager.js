const Employee = require("./Employee")

class Manager extends Employee{
    constructor(office) {
        super(empname,id,email)
        this.office=office
    }

    getOffice(){
        inquirer
            .prompt([
                {
                type: "input",
                name: "office",
                message: "Enter office number."
                }
            ])
            .then(val => {
                return office.value
            })
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager