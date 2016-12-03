var fs = require('fs')

fs.writeFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt', 'Writing to a file', err => {
  if(err) {
    return console.log(err)
  } else {
    fs.readFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt', 'utf-8', (err, data) => {
      if(err) {
        return console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})
