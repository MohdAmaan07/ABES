const http = require('http');
const axios = require('axios');

const port = 3000;
const server = http.createServer(async (req, res) => {
    try{
        res.writeHead(200, {'Content-Type': 'text/html'});
        const response = await axios.get('https://api.github.com/search/users?q=location:Ghaziabad');
        const data = response.data.items;
        let formData = `<html><head><title>Users</title></head><body><h1>Users</h1>`;
        data.forEach(users => {
            formData += `<div><img src = ${users.avatar_url}></div>`;
        });
        formData += `</body></html>`;
        res.end(formData);
    }
    catch(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error fetching data');
    }
}
);

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
}
);