const fs = require('fs');
function printFile(fileName){
    const data = fs.readFileSync(fileName, 'utf-8');
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