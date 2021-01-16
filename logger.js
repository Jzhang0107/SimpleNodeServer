eventEmitter = require('events');
const uuid = require('uuid');

class Logger extends eventEmitter{
    // function log
    log(msg)
    {
        // call event
        this.emit('message', {id: uuid.v4(), message: msg});
    }
}

const logger = new Logger();

logger.on('message', (data) => console.log("Called listener on logger", data));

logger.log('Regina');
console.log(__dirname, __filename)

// module.exports = Logger;