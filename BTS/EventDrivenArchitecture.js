let events = require('events');

// creating an event emitter
let eventEmitter = new events.EventEmitter();

// this is event listener 'connection'
eventEmitter.on('connection', () => {
    console.log('connection successful');
})

//emitting event 'connection'
eventEmitter.emit('connection');
eventEmitter.emit('connections');