const {readFile, writeFile} = require('fs');
//const {readFile, writeFile} = require('fs').promises; get the promise of it

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    const first = await readFilePromise('./content/first.txt', 'utf8');
    const second = await readFilePromise('./content/second.txt', 'utf8');
    writeFilePromise('./content/promises-async.txt', `CONTENT ${first}, ${second}`);
}

start();