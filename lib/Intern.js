const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
    super(name, id, school)
    this.school = school;
    this.title = "Intern";
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern