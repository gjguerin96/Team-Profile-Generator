const Employee = require("./Employee")

class Manager extends Employee{
    constructor(empname,id,email,office) {
        super(empname,id,email)
        this.office=office
    }

    getOffice(){
        return this.office
    }

    getRole(){
        return "Manager"
    }

    managerCard(){
        return `
        <div class="card">
            <div class="card-header">
                <h2>${this.getName()}</h2>
                <p>${this.getRole()}</p>
            </div>
            <ul class="list card-body">
                <li>Id: ${this.getId()}</li>
                <li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li>
                <li>Office number: ${this.getOffice()}</li>
            </ul>
        </div>
        `
    }
}

module.exports = Manager