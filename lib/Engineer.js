const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(empname,id,email,github) {
        super(empname,id,email)
        this.github=github
    }

    getGithub(){
        return this.github
    }

    engineerCard(){
        return `
        <div class="card">
            <div class="card-header">
                <h2>${this.getName()}</h2>
                <p>Engineer</p>
            </div>
            <ul class="list card-body">
                <li>Id: ${this.getId()}</li>
                <li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li>
                <li><a href="https://github.com/${this.getGithub()}" target="_blank">Github: ${this.getGithub()}</a></li>
            </ul>
        </div>
        `
    }
}

module.exports = Engineer