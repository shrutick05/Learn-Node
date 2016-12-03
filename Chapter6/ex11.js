var fs = require('fs')
var readable = fs.createReadStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt')
var writable = fs.createWriteStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt')
readable.pipe(writable)
