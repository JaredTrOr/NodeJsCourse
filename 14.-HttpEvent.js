const http = require('http');
const PORT = 3000;

const server = http.createServer();
server.on('request', (req,res) => {
    res.end('Welcome');
});

server.listen(PORT);