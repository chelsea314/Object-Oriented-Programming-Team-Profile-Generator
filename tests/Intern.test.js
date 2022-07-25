const Intern = require('../src/intern');

describe ("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('Alex', 123123, 'alex@email.com', 'UT');

            expect(intern.name).toEqual('Alex');
            expect(intern.id).toEqual(123123);
            expect(intern.email).toEqual('alex@email.com');
            expect(intern.school).toEqual('UT');
        })      
    })
});
