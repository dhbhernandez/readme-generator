const inquirer = requiere("inquirer") // asking for user 
const fs = require("fs")

inquirer.prompt([
{
    message: "what is the tittle of your project?",
    name: "tittle",
    type: "input"
}

])