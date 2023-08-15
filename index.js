const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

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
    },
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this project? (first and last name)"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log("README.md generated!")
    })
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))
        })
}

init();
