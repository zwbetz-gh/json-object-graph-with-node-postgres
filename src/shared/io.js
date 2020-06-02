const fs = require('fs');
const path = require('path');

const outputDir = 'output';

function makeDir(dir) {
  fs.mkdirSync(dir, {recursive: true});
}

function writeJsonFile(filename, json) {
  makeDir(outputDir);

  const filePath = path.join(outputDir, filename);
  const data = JSON.stringify(json, null, 2);
  
  console.log(`Writing JSON file to [${filePath}]`);
  fs.writeFileSync(filePath, data);
}

module.exports = {
  makeDir,
  writeJsonFile
};
