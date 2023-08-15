const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your repo?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a short summary of your project."
    },
    {
        type: "input",
        name: "insallation",
        message: "What is required to install your project"
    },
    {
        type: "input",
        name: "usage",
        message: "What are instructions for examples and use?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license is needed for this project?",
        choices: ["MIT", "GNU GPLv3", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log("README.md generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
