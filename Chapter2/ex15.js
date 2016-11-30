var fs = require('fs')
var writeStream = fs.createWriteStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/log.txt',
  {
    'flags': 'a',
    'encoding': 'utf8',
    'mode': 0666
  })
writeStream.on('open', () => {
  fs.readdir('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/data/', (err, files) => {
    if(err) {
      console.log(err.message)
    } else {
      files.forEach((name) => {
        fs.readFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/data/' + name, 'utf8', (err, data) => {
          if(err) {
            console.log(err.message)
          } else {
            var adjData = data.replace(/somecompany\.com/g, 'burningbird.net')
            fs.writeFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/data/' + name, adjData, err => {
              if(err) {
                console.log(err.message)
              } else {
                writeStream.write('changed' + name + '\n', 'utf8', err => {
                  if(err) {
                    console.log(err.message)
                  }
                })
              }
            })
          }
        })
      })
    }
  })
})
