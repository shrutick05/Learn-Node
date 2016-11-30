// Example 2-9. Application from Example 2-8 converted into asynchronous nested
// callbacks
var fs = require('fs')
fs.readFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/apple.txt','utf8', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    var adjData = data.replace(/apple/g, 'kiwi')
    fs.writeFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/kiwi.txt',adjData, (err, data) => {
      if(err) {
        console.log(err)
      }
    })
  }
})
