var http = require('http')
var fs = require('fs')
var mime = require('mime')
var base = '/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter5/'

http.createServer((req, res) => {
  pathname = base + req.url
  console.log(pathname)

  fs.stat(pathname, (err, stats) => {
    if(err) {
      console.log(err)
      res.writeHead(404)
      res.write('Resource missing 4040 \n')
      res.end()
    } else {
      //content type
      var type = mime.lookup(pathname)
      console.log(type)
      res.setHeader('Content-Type', type)

      // create and pipe readable stream
      var file = fs.createReadStream(pathname)

      file.on('open', function() {
        res.statusCode = 200
        file.pipe(res)
      })

      file.on('error', err => {
        console.log(err)
        res.writeHead(403)
        res.write('file missing or permission problem')
        res.end()
      })
    }
  })
}).listen(8000)
console.log('Server is running on port 8000')
