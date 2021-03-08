class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        // this.title names the object so we can refer to it later when we want to call our super()? cant figure out what this.title is used for, but i see it everywhere.. is it so when i generate my card it can access the returned information? this.title represents what happens after the employee class recieves all the user iput from the inquirer? thats totally what it is.
        this.title = "Employee"
    }
}