// using require
var Console = require('console').Console

var cons = new Console(process.stdout, process.stderr)
cons.log('testing cons')

// using existing console object
var cons2 = new console.Console(process.stdout, process.stderr)
cons2.error('testing error')
