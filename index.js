const inquirer = require('inquirer');
const {type} = require('os');
const generateMarkdown = require('./src/readme-template');
const {writeFile} = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
const ReadmeQuestions = () => {
    return inquirer.prompt([
        // project title
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name: ',
            validate: nameInput  => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Name!');
                    return false;
                }
            }
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your Project: ',
            validate: descriptionInput  => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your Project.');
                    return false;
                }
            }
        },
        // installation Instructions
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a Installation Instructions or write "No installation Required": ',
            validate: installationInput  => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide instructions to run your Project.');
                    return false;
                }
            }
        },
        //Usage Information
        {
            type: 'input',
            name: 'usage',
            message: 'Please reasons for Usage: ',
        },
        //License checkbox
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select applicable licenses. If no license is applicable select blank option.',
            choices: ['Apache2.0', 'MIT', "GNU GPLv3", 'ISC', ' ']
        },
        // Contributing Section
        {
            type: 'input',
            name: 'contribute',
            message: 'Please add all pertaining contributors: ',
            validate: contributeInput  => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please provide list of contributors.');
                    return false;
                }
            }
        },
        //Contribution Guidlines
        {
            type: 'input',
            name: 'guidlines',
            message: 'Please provide your preferred requirements for Contribution: ',
            validate: guidlinesInput  => {
                if (guidlinesInput) {
                    return true;
                } else {
                    console.log('Please provide list of contributors.');
                    return false;
                }
            }
        },
        //Tests
        // {
        //     ask about what tests should be?
        // },
        //Questions to for contact, email address
        {
            type: 'input',
            name: 'contact',
            message: 'Please provide contact information for user questions: ',
            validate: contactInput  => {
                if (contactInput) {
                    return true;
                } else {
                    console.log('Please provide list of contributors.');
                    return false;
                }
            }
        },
        // github link
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github name: ',
            validate: githubInput  => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide list of contributors.');
                    return false;
                }
            }
        }
    ]);
};

// Function call to initialize app
ReadmeQuestions()
    .then(createTemplate => {
        // call readme template to input all of the data from readmeQuestions function
    })
    .then(generateFile => {
       return writeFile(generateFile);
    })
    .catch(err => {
        console.log(err);
    });
