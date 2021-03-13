const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

let team = []


// create writeFile function using promises instead of a callback function(util.promisfy)
const writeFileAsync = util.promisify(fs.writeFile);
// create appendfile as a step in my forloop


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
            name: "extendedQuestion",
            message: "What is the employee's github username?",
        },])
        const engineer = new Engineer(data.name, data.id, data.email, dataTwo.extendedQuestion);
        team.push(engineer)
        askIfMoreEmployees()

        // todo create prompt for Intern
    } else if (data.role === "Intern") {
        dataTwo = await inquirer.prompt([{
            type: "input",
            // will name all employee class extentions the same thing so we dont have to include if else statements in my forloop
            name: "extendedQuestion",
            message: "What school does this employee attend?",
        },])
        const intern = new Intern(data.name, data.id, data.email, dataTwo.extendedQuestion);
        team.push(intern)
        askIfMoreEmployees()

        // todo create prompt for manager
        // no true statement is required because manager is the only remaining option
    } else {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "extendedQuestion",
            message: "What is the employee's office number?",
        },])
        const manager = new Manager(data.name, data.id, data.email, dataTwo.extendedQuestion);
        team.push(manager);
        askIfMoreEmployees()
    }

}

async function askIfMoreEmployees() {
    // function that will determine if its time to run the prompt again or if the program should start generating cards.
    try {
        dataTwo = await inquirer.prompt([{
            type: "confirm",
            name: "addAnother",
            message: "Would you like to add another employee?",
        },])
        if (dataTwo.addAnother) {
            promptUser()
        } else {
            // loop through team and generate html using fs to createfile
            let html = ""
            console.log("team",team)
            for (let i = 0; i < team.length; i++) {
                // if 102 through 106 gives you an issue add the method insted of the inquirer object name
                html += `
           <h1>${team[i].name}<h1>
           <h2>${team[i].title}<h2>
           <p>${team[i].id}<p>
           <p>${team[i].title === "Engineer" ? team[i].github : team[i].title === "Intern" ? team[i].school : team[i].officeNumber}</p>
           
           `
            }
            html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/style.css">

    <title>Team profile generator</title>
</head>
<body><div id="container">` + html + `</div></body></html>`
            writeFileAsync("./dist/index.html", html)
            console.log("Big success :)")
        }
    } catch (err) {
        console.log(err)
    }
}

promptUser()