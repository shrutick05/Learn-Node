var fs = require('fs')
var readable = fs.createReadStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt').setEncoding('utf8')
var data = ''
readable.on('data', chunk => data += chunk)
readable.on('end', function() {
  console.log(data)
})
