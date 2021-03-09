const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

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
    //  does it matter where these commas go? punctuation/syntax may be wrong! i think they go between my curly and array because there is another prompt at the end of the list and the objects need to be seperated. imagining this as being part of the original prompt structure even though it "looks seperate"
    if (data.role === "Engineer") {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "?",
            message: "What is the employee's github username?",
        },])

        // todo create prompt for Intern
        //  does it matter where these commas go? punctuation/syntax may be wrong!
    } else if (data.role === "Intern") {
        dataTwo = await inquirer.prompt([{
            type: "input",
            name: "?",
            message: "What school does this employee attend?",
        },])


    }
    async function runApp() {
        await promptUser()
    }

