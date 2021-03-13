const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.title = "Intern";
    }
    getExtendedQuestion() {
        return this.school
    } 
    getName(){
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern