const fs = require('fs');
const data = fs.readFileSync('data', 'utf-8');
console.log(data.toString());