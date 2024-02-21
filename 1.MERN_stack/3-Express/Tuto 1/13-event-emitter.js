const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log("data recieved", name, "with", id);
})

customEmitter.emit('response', 'jhon', 34);