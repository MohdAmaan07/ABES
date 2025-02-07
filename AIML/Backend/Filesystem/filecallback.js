const path = require('path');

const read = (fileName) => {
    const filePath = path.join(__dirname, fileName);
    const fs = require('fs');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) console.log(err);
        console.log(data);
    });
}
module.exports = read;