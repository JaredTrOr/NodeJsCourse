const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home page');
    }
    else if(req.url === '/about'){
        //BLOCKING CODE EXAMPLE
        setTimeout(() => {
            res.end('About page');
        },8000);
    }
    else res.end('Error page');
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});