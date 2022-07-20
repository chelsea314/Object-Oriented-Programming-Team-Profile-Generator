const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(school);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }
    
    getRole() {
        return Intern
    };
}