var fs = require('fs')
var util = require('util')

fs.stat('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/input.txt', (err, stats) => {
  if(err) {
    return console.log(err)
  } else {
    console.log(util.inspect(stats))
  }
})
