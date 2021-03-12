const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

let team = []

// create writeFile function using promises instead of a callback function(util.promisfy)
// writeFile instead of write so it keeps trying until all of data is written or an error occurs
const writeFileAsync = util.promisify(fs.writeFile)

// todo create main question prompt
// const promptUser = async () => { inquirer.prompt([..... is that how i would write an async arrow function? do i need the curly after the arrow?
async function promptUser() {

    let data = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
    ]);

    // todo create prompt for Engineer
    if (data.role === "Engineer") {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "github",
            message: "What is the employee's github username?",
        },])
        console.log("create engineer with class constructor and push to team array")
        const engineer = new Engineer(data.name, data.id, data.email, dataTwo.github);
        team.push(engineer)
        askIfMoreEmployees()

        // todo create prompt for Intern
    } else if (data.role === "Intern") {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "school",
            message: "What school does this employee attend?",
        },])
        const intern = new Intern(data.name, data.id, data.email, dataTwo.school);
        team.push(Intern)
        askIfMoreEmployees()

        // todo create prompt for manager
        // no true statement is required because manager is the only remaining option
    } else {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?",
        },])
        const manager = new Manager(data.name, data.id, data.email, dataTwo.officeNumber);
        team.push(manager);
        askIfMoreEmployees()
    }

}

async function askIfMoreEmployees() {
    // function that will determine if its time to run the prompt again or if the program should start generating cards.
    dataTwo = await inquirer.prompt([{
        type: "confirm",
        name: "addAnother",
        message: "Would you like to add another employee?",
    },])
    if (dataTwo.addAnother) {
        promptUser()
    } else {
       // loop through team and generate html using fs to createfile
       for (let i = 0; i < team.length; i++) {
           let html = `
           
           `
           
       }

    }
}

promptUser()

