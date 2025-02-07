const { console } = require('inspector');
const path = require('path');
const importPath = path.join(__dirname, 'filecallback.js');

const read = require(importPath)
read('data')
console.log('Reading file data');
