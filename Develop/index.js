// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
    },
    {
        type:'input',
        message:'Provide a short description explaining how you got to this point.',
        name:'description',
    },
    {
        type:'input',
        message:'What are thee steps to install your project?',
        name:'installation',
    },
    {
        type:'input',
        message:'Provide instructions and examples for use.',
        name:'usage',
    },
    {
        type:'list',
        message:'Which liscense would you like to use?',
        name:'liscense',
        choices:[],
    },
    {
        type:'input',
        message:'What are the contribution guidelines for your project?',
        name:'contribution',
    },
    {
        type:'input',
        message:'Provide instruction on how to run tests',
        name:'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("test.txt", finalReadMe, err => {
        err ? console.log("Error, try again") : ("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            const finalReadMe = generateMarkdown(response)
            console.log(response)
            writeToFile("test.txt", finalReadMe)
        })
}

// Function call to initialize app
init();
