const Engineer = require('../src/engineer');

describe ("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('Alex', 123123, 'alex@email.com', 'alexgit');

            expect(engineer.name).toEqual('Alex');
            expect(engineer.id).toEqual(123123);
            expect(engineer.email).toEqual('alex@email.com');
            expect(engineer.github).toEqual('alexgit');
        })      
    })
});



  // it("should throw an error if not provided an id", () => {
        //     const cb = () => new Engineer("Alex");
      
        //     // Define the error message that is expected to be thrown
        //     const err = new Error("Expected parameter 'id' to be a non-negative number");
      
        //     // Verify that the correct error was thrown when the callback is executed
        //     expect(cb).toThrowError(err);
        //   });
