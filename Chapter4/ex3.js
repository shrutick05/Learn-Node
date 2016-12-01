var fs = require('fs')
var Console = require('console').Console

var output = fs.createWriteStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter4/stdout.log')
var errorOutput = fs.createWriteStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter4/stderr.log')

// custom simple logger
var logger = new Console(output, errorOutput)

//use it like console
var count = 5
logger.log('count: %d', count)
// in stdout.log: count 5
