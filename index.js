const inquirer = require("inquirer"); // asking for user 
const fs = require("fs");

inquirer.prompt([
    {
        message: "what is the tittle of your project?",
        name: "tittle",
        type: "input"
    },

    {
        message: "What is the description of your project?",
        name: "description",
        type: "input"
    },
    {
        message: "what is the installation process?",
        name: "installation",
        type: "input"
    },
    {
        message: "what usage?",
        name: "usage",
        type: "input"
    },
    {
        message: "Provide instructions and examples for use. Include screenshots as needed",
        name: "usage",
        type: "input"
    },
    {
        message: "License",
        name: 'license',
        type: 'list',
        choices: ["MIT" , "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        message: "who contribute to the project?",
        name: "contributing",
        type: "input"
    },
    {
        message: "Any testing procceses?",
        name: "tests",
        type: "input"
    },
    {
        message: "what is the installation process?",
        name: "installation",
        type: "input"
    },
    {
        message: "what is your name?",
        name: "name",
        type: "input"
    },
    {
        message: "what is your github user name?",
        name: "github",
        type: "input"
    },
    {
        message: "what is your Email address?",
        name: "email",
        type: "input"
    },

])

    .then(function (answers) {
        console.log(answers);

        var renderReadMe =
        ` # title
    ${answers.tittle}

## Table of Contents
* [Installation Instructions](#Installation-Instructions)
* [Usages](#Usages)
* [Contribution Guideline](#Contribution-Guideline)
* [Testing Instructions](#Testing-Instructions)
* [Licenses](#Licenses)
* [Questions](#Questions)

## Description 
${answers.description}
## Installation Instructions
${answers.installation}
## Usage 
${answers.usage}
## License
${answers.license}
## Contribution Guideline
${answers.contributing}
## Testing Instructions
${answers.tests}
## Questions
Any questions or suggestions reach:
* ${answers.name}
* Via [Github] https://github.com/${answers.github}
* Via Email: ${answers.email}
        


        `
    fs.writeFile("README.md", renderReadMe, (err) => err ? console.log(err) : console.log("success"));

    })

