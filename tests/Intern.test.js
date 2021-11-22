const Intern = require('../lib/Intern')

describe('Intern class', () => {
    const intern = new Intern("Employee name","Id","Email","School")

    describe('getSchool', () => {
        it("should return the value passed into it", () => {
            const str = "School"
            expect(intern.getSchool()).toEqual(str)
        }
    )})

    describe('internCard', () => {
        it("should return the html for the intern card with values passed into it", () => {
            const str = `
        <div class="card">
            <div class="card-header">
                <h2>Employee name</h2>
                <p>Intern</p>
            </div>
            <ul class="list card-body">
                <li>Id: Id</li>
                <li><a href="mailto:Email">Email: Email</a></li>
                <li>School: School</li>
            </ul>
        </div>
        `
            expect(intern.internCard()).toEqual(str)
        }    
    )})
})