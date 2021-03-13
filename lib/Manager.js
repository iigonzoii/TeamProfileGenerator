const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.title = "Manager"
        this.officeNumber = officeNumber
    }
    getExtendedQuestion(){
        return this.officeNumber;
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
        return 'Manger';
    }
}

module.exports = Manager