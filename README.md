# Readme Generator

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Readme Generator is an application that prompts a user questions to fill out a readme.md without having to style the page.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](git@github.com:nicoguarino/readme-generator.git)

## Installation <a name = "installation"></a>

1. Download Node to be able to run application
2. Download Inquirer by npm i inquirer
3. To run application type in the command line node index.js

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/openweather/blob/main/assets/images/sample_code.png "Sample Code")

### Sample Code
```JavaScript Sample
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino


## Contributing <a name = "contributing"></a>

Readme generator is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Readme Generator


