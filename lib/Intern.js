const Employee = require("./Employee")

class Intern extends Employee{
    constructor(empname,id,email,school) {
        super(empname,id,email)
        this.school=school
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }

    internCard(){
        return `
        <div class="card">
            <div class="card-header">
                <h2>${this.getName()}</h2>
                <p>${this.getRole()}</p>
            </div>
            <ul class="list card-body">
                <li>Id: ${this.getId()}</li>
                <li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li>
                <li>School: ${this.getSchool()}</li>
            </ul>
        </div>
        `
    }
}

module.exports = Intern