// Example 6-1. Getting file permissions using stat-mode
var fs = require('fs')
var Mode = require('stat-mode')

fs.stat('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/input.txt', (err, stats) => {
  if(err) {
    return console.log(err)
  } else {
    // get permissions
    var mode = new Mode(stats)

    console.log(mode.toString())
    console.log('Group execute ' + mode.group.execute)
    console.log('Others write ' + mode.others.write)
    console.log('Owner read ' + mode.owner.read)
  }
})
