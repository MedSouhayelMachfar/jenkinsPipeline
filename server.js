const http = require('http');


const PORT = 8090;

const server = http.createServer(function (req, res) {
    console.log(`Request recieved on : ${req.url}`);
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        return res.end(); 
    }
    if(req.url === '/status'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('OK');
        return res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Resource not found!');
        return res.end(); 
    }
  }).listen(PORT);

server.on('listening', () => {
    console.log(`Server is listening on port : ${PORT}`);
});