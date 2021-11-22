const Employee = require('../lib/Employee')

describe('Employee class', () => {
    const employee = new Employee("Employee name","Id","Email")

    describe('getName', () => {
        it("should return the name value passed into it", () => {
            const str = "Employee name"
            expect(employee.getName()).toEqual(str)
        }
    )})

    describe('getId', () => {
        it("should return the id value passed into it", () => {
            const str = "Id"
            expect(employee.getId()).toEqual(str)
        }    
    )})
    
    describe('getEmail', () => {
        it("should return the email value passed into it", () => {
            const str = "Email"
            expect(employee.getEmail()).toEqual(str)
        }    
    )})
})