// Example 2-4. Basic web server with additional event highlighting
let http = require('http')

let server = http.createServer()
console.log('sever created')

server.on('request', (req, res) => {
  console.log('request event')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello, world!')
})

server.on('connection', () => console.log('connection event'))

server.listen(8000, () => console.log('listening event'))

console.log('Server is running on 8000')
