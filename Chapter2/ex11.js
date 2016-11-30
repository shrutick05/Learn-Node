// Example 2-6. Very basic test of the EventEmitter functionality
let eventEmitter = require('events').EventEmitter
let counter = 0

let em = new eventEmitter()

setInterval(() => { em.emit('timed', counter++) }, 3000)

em.on('timed', (data) => {
  console.log('timed ' + data)
})
