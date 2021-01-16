const eventEmitter = require('events');

// Create class
class Emitter extends eventEmitter {}

// Create object of type Emitter
const emitter = new Emitter();

emitter.on('event', () => console.log('Event fired!'));

emitter.emit('event');