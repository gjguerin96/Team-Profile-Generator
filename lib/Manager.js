const Employee = require("./Employee")

class Manager extends Employee{
    constructor(empname,id,email,office) {
        super(empname,id,email)
        this.office=office
    }

    getOffice(){
        return this.office
    }
    managerCard(){
        return `
        <div class="card">
            <div class="card-header">
                <h2>${this.getName()}</h2>
                <p>Manager</p>
            </div>
            <ul class="list card-body">
                <li>Id: ${this.getId()}</li>
                <li><a href="mailto:${this.getEmail()}"></a>Email: ${this.getEmail()}</li>
                <li>Office number: ${this.getOffice()}</li>
            </ul>
        </div>
        `
    }
}

module.exports = Manager