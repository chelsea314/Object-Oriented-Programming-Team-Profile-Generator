const Employee = require('../src/employee');

describe ("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email if provided valid arguments", () => {
            const employee = new Employee('Alex', 123123, 'alex@email.com');

            expect(employee.name).toEqual('Alex');
            expect(employee.id).toEqual(123123);
            expect(employee.email).toEqual('alex@email.com');
        })      
    })
});
