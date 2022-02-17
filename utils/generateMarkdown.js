// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Boost 1.0") {
    return '[[![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)](https://opensource.org/licenses/Boost-1.0)'
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  ---------------------

  ## GitHub:
  ${data.github}

  ## Email Me:
  ${data.email}

  ## Description:
  ${data.description}

  ## If any, what license are you using?
  ${renderLicenseBadge(data.license)}

  ## What command should be run to install dependencies?
  ${data.dependencies}

  ## What command should be run to run tests?:
  ${data.tests}

  ## Is there anything important to note of the repository?
  ${data.repo}

  ## Is there anything important to note about contributing to the repo?
  ${data.contribute}

`;
}

module.exports = generateMarkdown;
