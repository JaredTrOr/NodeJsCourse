const {createReadStream} = require('fs');

const stream = createReadStream('./content/long.txt');  

stream.on('data', (result) => {
    console.log(result);
});

//Adittional info

/*

default 64kb
last buffer - remainder
higherWaterMark - control size
const stream = createReadStream('./content/long.txt', {highWaterMark: 90000});
const stream = createReadStream('./content/long.txt', {encoding: 'utf8'});


*/ 