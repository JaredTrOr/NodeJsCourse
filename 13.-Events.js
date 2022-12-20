const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`Hello ${name}, you are ${age}`);
});

customEmitter.emit('response', 'Jared','19');