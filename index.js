const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Questions definition
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Please enter a project title',
        validate: (input) => {
            return input ? true : "Please enter a valid title";
        }
    },
    {
        type: 'input',
        message: 'Please enter a project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter a usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter test instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: [
            "Apache 2.0",
            "GPL v3.0",
            "IPL 1.0",
            "EPL 2.0",
            "MIT",
        ],
    },
    {
        type: 'input',
        message: 'Please enter your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
];

//Create readme file with answers collected from user prompt
const writeToFile = (fileName, data) => {
    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, (err) =>
      err ? console.log(err) : console.log('Success!'));
}

//Prompts user with questions
const promptUser = () => {
    return inquirer.prompt(questions);
}

//Initializer
const init = async () => {
    const answers = await promptUser();
    writeToFile("README.md", answers);
}

// Function call to initialize app
init();
