const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = sayHi;
module.exports.data = ['item 1','item 2', 'item 3'];

//module.exports.(name) = variable