const path = require('path');
const fs = require('fs')
const read = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8'); 
        return JSON.parse(data); 
    } catch (err) {
        console.error("Error reading file:", err);
        return []; 
    }
};
module.exports = read;