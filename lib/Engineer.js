const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.title = "Engineer";
        this.github = github;
    }
    getExtendedQuestion() {
        return this.github
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer