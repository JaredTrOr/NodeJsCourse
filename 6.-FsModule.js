const {readFileSync, writeFileSync} = require('fs');

//Read file takes two parameters |directory|encoding usually is utf8
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(`First: ${first}`);
console.log(`Second: ${second}`);

//Create a new file with the other two text files
function createFile(filename){
    //directory,content
    writeFileSync(`./content/${filename}.txt`, `${first}, ${second}`);
}

function overrideFile(){
    //directory-content-indicate to override the file
    writeFileSync('./content/filename.txt', 'content of the text', {flag:'a'});
}
