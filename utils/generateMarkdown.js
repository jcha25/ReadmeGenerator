function renderLicenseBadgeAndLink(data) {
  if(data.license === "None") {
    return ""
  } else if(data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if(data.license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
}

function renderLicenseTableOfContents(data) {
  if(data.license === "None") {
    return "";
  } else {
    return `* [License](#license)`
  }
}

function renderLicenseSection(data) {
  if(data.license === "None") {
    return ""
  } else {
    return `## License
${renderLicenseBadgeAndLink(data)}`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTableOfContents(data)}
* [Credits](#credits)
## Insallation
${data.insallation}
## Usage
${data.usage}
${renderLicenseSection(data)}
## Credits
Contributors: ${data.credits}
`;
}

module.exports = generateMarkdown;
