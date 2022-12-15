const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home page');
    }
    else if(req.url === '/about'){
        res.end('About page');
    }
    else{
        res.end(`
        <h1>Oops...</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Home</a>
    `);
    }
    
});

server.listen(PORT);