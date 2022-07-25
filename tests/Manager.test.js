const Manager = require('../src/manager');

describe ("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager('Alex', 123123, 'alex@email.com', 234);

            expect(manager.name).toEqual('Alex');
            expect(manager.id).toEqual(123123);
            expect(manager.email).toEqual('alex@email.com');
            expect(manager.officeNumber).toEqual(234);
        })      
    })
});
