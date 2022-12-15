const {readFile} = require('fs');

console.log('first task');
readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log('completed first task');
    console.log(result);
});

console.log('next task');


