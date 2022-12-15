//CommonJS, every file is a module (by default)
//Modules - Encapsulated code (only share minimum)
const {name1, name2} = require('./modules/names');
const sayHi = require('./modules/functions');
const data = require('./modules/functions').data;

//Calling a function without storing it
require('./3.-Mind-granade')

sayHi(name1);
sayHi(name2);
console.log(data);

