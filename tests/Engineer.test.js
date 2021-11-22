const Engineer = require('../lib/Engineer')

describe('Engineer class', () => {
    const engineer = new Engineer("Employee name","Id","Email","Github")

    describe('getGithub', () => {
        it("should return the value passed into it", () => {
            const str = "Github"
            expect(engineer.getGithub()).toEqual(str)
        }
    )})

    describe('engineerCard', () => {
        it("should return the html for the engineer card with values passed into it", () => {
            const str = `
        <div class="card">
            <div class="card-header">
                <h2>Employee name</h2>
                <p>Engineer</p>
            </div>
            <ul class="list card-body">
                <li>Id: Id</li>
                <li><a href="mailto:Email">Email: Email</a></li>
                <li><a href="https://github.com/Github" target="_blank">Github: Github</a></li>
            </ul>
        </div>
        `
            expect(engineer.engineerCard()).toEqual(str)
        }    
    )})
})