const path = require('path');
console.log(`Pat sep: ${path.sep}`); //it gets the sep

const filePath = path.join('/modules', 'functions.js');
console.log(`File path: ${filePath}`);

const lastPortion = path.basename(filePath);
console.log(`Last portion: ${lastPortion}`);

const absoulute = path.resolve(__dirname, 'modules', 'functons.js');
console.log(`Absolute: ${absoulute}`);


