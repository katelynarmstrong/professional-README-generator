// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Boost 1.0") {
    return '[[![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)](https://opensource.org/licenses/Boost-1.0)'
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

//license link
const renderLicenseLink = license => {
  let licenseLink = 'https://choosealicense.com/licenses/';
  if (license === 'None') {
    return licenseLink = '';
  } else if (license === 'MIT') {
    return licenseLink = licenseLink + 'mit/';
  } else if (license === 'Apache 2.0') {
    return licenseLink = licenseLink + 'apache-2.0/';
  } else if (license === 'Boost Software') {
    return licenseLink = licenseLink + 'bsl-1.0/';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents
  ---------------------
  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Repo](#repo)
  * [Contribute](#contribute)
  * [Questions](#questions)

  ## License
  For more information on this license, please see ${licenseLink}

  ## Installation
  ${data.instal}

  ## Tests
  ${data.tests}

  ## Repo
  ${data.repo}

  ## Contribute
  ${data.contribute}

  ## Questions: 
  You may email me with any additional questions at: ${data.email}
  To see other projects review my GitHub: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
