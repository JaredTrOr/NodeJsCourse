const {writeFileSync} = require('fs');

for(let i = 1; i<=100000; i++){
    writeFileSync('./content/long.txt', `Index: ${i} \n`, {flag: 'a'});
}