// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('You need to enter a project name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'license',
            message: 'If any, what license are you using? (Required)',
            choices:['MIT', 'Apache 2.0', 'Boost 1.0', 'None'],
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies? (Required)',
            validate: dependenciesInput => {
              if (dependenciesInput) {
                return true;
              } else {
                console.log('You need to enter the command needed to install dependencies!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests? (Required)',
            validate: testsInput => {
              if (testsInput) {
                return true;
              } else {
                console.log('You need to enter the command needed to run tests!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
            validate: repoInput => {
              if (repoInput) {
                return true;
              }
            }
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
            validate: contributeInput => {
              if (contributeInput) {
                return true;
              }
            }
          },
    ]).then(answers => {
      writeToFile("README.md", answers)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  fs.writeFile(fileName, markdown(data), (err) => {
    if (err) throw err;
    console.log('readme file created!');
  })
}

// Function call to initialize app
promptUser();
