const {readFile} = require('fs');

function getText(path){
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

/* PROMISES
getText('./content/first.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

//Aync await
const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
    
};

start();