// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return (license 
    ? `[![License](https://img.shields.io/badge/license-${license.replace(/\s/g, "%20")}-orange.svg)]`
    : ''
  )
}

// Returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  return (license
    ? `(https://opensource.org/licenses/${license.replace(/\s/g, "-")})`
    : ''
  );
}

// Renders the license section within readme if license is given
const renderLicenseSection = (license) => {
  return (license
    ? `<a name="license"></a>\n## License\n${license}`
    : ''
  );
}

// Renders description section within readme if given
const renderDescriptionSection = (description) => {
  return (description
    ? `<a name="description"></a>\n## Description\n${description}\n`
    : ''
  );
}

// Renders installation section if given
const renderInstallationSection = (installation) => {
  return (installation
    ? `<a name="installation"></a>\n## Installation\n${installation}\n`
    : ''
  );
}

// Renders usage section if given
const renderUsageSection = (usage) => {
  return (usage
    ? `<a name="usage"></a>\n## Usage\n${usage}\n`
    : ''
  );
}

// Renders contribution section if given
const renderContributionSection = (contribution) => {
  return (contribution
    ? `<a name="contribution"></a>\n## Contribution\n${contribution}\n`
    : ''
  );
}

// Renders tests section if given
const renderTestsSection = (tests) => {
  return (tests
    ? `<a name="tests"></a>\n## Tests\n${tests}\n`
    : ''
  );
}

// Renders questions if given
const renderQuestionSection = (github, email) => {
  const githubInfo = github ? `Find me on github: <https://github.com/${github}><br>` : "";
  const emailInfo = email ? `For any questions, please do not hesitate to contact me at ${email}` : "";

  const questionInfo = "".concat(githubInfo, emailInfo);

  return (questionInfo
    ? `<a name="questions"></a>\n## Questions\n${questionInfo}\n`
    : ''
  );
}

// Renders table of contents
const renderTableOfContents = (data) => {
  const toc = ['## Table of contents\n'];

  if (data.description) { toc.push('[Description](#description)<br>'); }
  if (data.installation) { toc.push('[Installation](#installation)<br>'); }
  if (data.usage) { toc.push('[Usage](#usage)<br>'); }
  if (data.contribution) { toc.push('[Contribution](#contribution)<br>'); }
  if (data.tests) { toc.push('[Tests](#tests)<br>'); }
  if (data.license) { toc.push('[License](#license)<br>'); }
  if (data.github || data.email) { toc.push('[Questions](#questions)<br>'); }

  let tocStr = "";
  toc.forEach((toc) => {tocStr = tocStr.concat(toc)});
  return tocStr;
}

// Renders title of readme
const renderTitle = (title) => {
  return `# ${title}`;
}

// Generate markdown for README
function generateMarkdown(data) {
  return `
${renderTitle(data.title)}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

${renderTableOfContents(data)}
${renderDescriptionSection(data.description)}
${renderInstallationSection(data.installation)}
${renderUsageSection(data.usage)}
${renderContributionSection(data.contribution)}
${renderTestsSection(data.tests)}
${renderLicenseSection(data.license)}
${renderQuestionSection(data.github, data.email)}
`
}

module.exports = generateMarkdown;