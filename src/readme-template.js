// create readme template here

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const blank = "";
    let tempLicenseArray = [];

    license.forEach(badge => {
        switch(badge) {
            case 'Apache2.0':
                tempLicenseArray.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
                break;
            case 'MIT':
                tempLicenseArray.push('[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
                break;
            case 'GNU GPLv3':
                tempLicenseArray.push('[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
                break;
            case 'ISC':
                tempLicenseArray.push('[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
                break;
            default:
                return blank;
        }
    });
    return tempLicenseArray;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown ({name, description, installation, usage, license, contribute, guidlines, test, contact, github}) {
   const badges = renderLicenseBadge(license);
  return `

## ${name}
${badges.toString()}

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Acknowledgement of Contributors](#acknowledgement)
- [Contribution Guidlines](#contributing)
- [Contact Information](#contact)
- [License](#license)

## About <a name = "about"></a>
    ${description}

## Installation <a name = "installation"></a>
    ${installation}

## Usage <a name = "usage"></a>
    ${usage}

## Test <a name = "test"></a>
    ${test}

## Acknowledgement of Contributors <a name = "acknowledgement"></a>
    ${contribute}

## Contribution Guidlines <a name = "contributing"></a>
    ${guidlines}

## Contact Information <a name = "contact"></a>
    ${contact}
    * [Git Repo](https://github.com/${github})

## License <a name = "license"></a>
    Pertinent licenses ${license}
    

`;
}

module.exports = generateMarkdown;