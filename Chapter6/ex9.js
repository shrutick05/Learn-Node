var fs = require('fs')

fs.open('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/some.txt', 'r+' ,(err, fd) =>{
  if(err) {
    return console.log(err)
  } else {
    var writable = fs.createWriteStream(null, {fd: fd,  start: 10, defaultEncoding: 'utf8'})
    writable.write('\ninserting this text')
  }
})
