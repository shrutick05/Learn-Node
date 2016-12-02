var http = require('http')
var fs = require('fs')
var base = '/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter5/'

http.createServer((req, res) => {
  pathname = base + req.url
  console.log(pathname)
}).listen(8000)

console.log('Server is running on port 8000')
