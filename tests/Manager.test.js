const Manager = require('../lib/Manager')

describe('Manager class', () => {
    const manager = new Manager("Employee name","Id","Email","Office")

    describe('getOffice', () => {
        it("should return the value passed into it", () => {
            const str = "Office"
            expect(manager.getOffice()).toEqual(str)
        }
    )})

    describe('managerCard', () => {
        it("should return the html for the manager card with values passed into it", () => {
            const str = `
        <div class="card">
            <div class="card-header">
                <h2>Employee name</h2>
                <p>Manager</p>
            </div>
            <ul class="list card-body">
                <li>Id: Id</li>
                <li><a href="mailto:Email">Email: Email</a></li>
                <li>Office number: Office</li>
            </ul>
        </div>
        `
            expect(manager.managerCard()).toEqual(str)
        }    
    )})
})