let events = require('events');

// creating an event emitter
let eventEmitter = new events.EventEmitter();

// this is event listener 'connection'
eventEmitter.on('connection', () => {
    console.log('connection successful');
})

//emitting event 'connection'
eventEmitter.emit('connection');
eventEmitter.emit('connections'); // wont be called, as there is no event 'connections'

eventEmitter.on('testEvent', (msg) => {
    console.log('Inside test event with message :: '+ msg);
})

eventEmitter.emit('testEvent', ':: TEST EVENT SUCCESSFUL');
