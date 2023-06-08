const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

//  generate the README content based on user responses
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.licenses}
[![License](https://img.shields.io/badge/License-${answers.licenses}-green.svg)](https://opensource.org/licenses/${answers.licenses})


## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For any questions, please feel free to reach out to me on GitHub: [${answers.github}](https://github.com/${answers.github})
You can also contact me via email: ${answers.email}
`;
}

// Function to prompt the user with questions and generate the README file
function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      fs.writeFile('README.md', readmeContent, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md file generated successfully!');
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// Call the promptUser function to start the application
promptUser();
