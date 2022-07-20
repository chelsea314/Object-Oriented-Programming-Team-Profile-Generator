const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(github);
        this.github = github;
    };

    getGithub() {
        console.log(this.github);
    };
    
    getRole() {
        return Engineer
    };
}