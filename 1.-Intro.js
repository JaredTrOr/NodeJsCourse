//GLOBAL - NO WINDOW!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
//process     - info about env where the program is being exexuted  

console.log(`This is the current directory ${__dirname}`);
setInterval(() => {
    console.log('Repeating...');
},1000);

