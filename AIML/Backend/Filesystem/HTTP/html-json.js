const http = require('http');
const path = require('path');
const read = require('../filecallback');
const fs = require('fs');

const filePath = path.join(__dirname, `data.json`);
const users = read(filePath)
console.log('Reading file data');   

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        const names = users.map(user => user.name);
        res.end(JSON.stringify(names));
    }
    else if (req.url === '/home') {
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading home.html');
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    else{
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

port = 3000;
server.listen(3000, () => {
    console.log(`Server is running on ${port}`);
});