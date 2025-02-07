const fs = require('fs');
const path = require('path');

function printFile(fileName){
    const filePath = path.join(__dirname, fileName);
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data.toString());
}

printFile('data')
const txt = "Hello World\n";
fs.writeFileSync('tmp', txt);

printFile('tmp')

const newTxt = "Hello Node";
fs.appendFileSync('tmp', newTxt);

printFile('tmp')

if(newTxt.match('H')){
    const newData = newTxt.replace('H', 'J');
    fs.writeFileSync('tmp', newData);
}

printFile('tmp')