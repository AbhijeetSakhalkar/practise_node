const http = require('http');

const server = http.createServer((req, resp) => {
    console.log('First Web Server Log');
    resp.end('First Response');
});

server.listen(3000, () =>{
    console.log('Server is started');
});