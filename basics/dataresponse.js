const http = require('http');

const data = [
    {
        id : 1,
        name : "Abhijeet"
    },
    {
        id : 2,
        name : "Jack Sparrow"
    },
    {
        id : 3,
        name : "John Wick"
    }

]

const server = http.createServer((req, resp) => {

    resp.setHeader('Content-Type', 'Application/json');
    resp.setHeader('Content-Language', 'en-US');
    resp.setHeader('Date', new Date(Date.now()));
    resp.setHeader('X-Powered-By', 'Node.js');

    resp.end(
        JSON.stringify({
            success : true, 
            datalength : data.length,
            data : data
    })
    );
});

server.listen(3000, () => {
    console.log('Server is stared on port 3000');
})