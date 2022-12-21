const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/long.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        res.end(err);
    });
}).listen(3000);