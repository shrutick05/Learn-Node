var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
  let name = require('url').parse(req.url, true).query.name
  if (name === 'burningbird') {
    let file = 'download.jpg'
    fs.stat(file, function (err, stat) {
    if (err) {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Sorry, Burningbird isn\'t around right now \n')
    } else {
      let img = fs.readFileSync(file)
      res.contentType = 'image/jpg'
      res.contentLength = stat.size
      res.end(img, 'binary')
    }
    })
  } else {
    name = 'world'
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello ' + name + '\n')
  }
}).listen(8000)

console.log('Server running at port 8000/')
