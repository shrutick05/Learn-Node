var http = require('http')

console.time('hello-timer')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello, World!')
  console.timeEnd('hello-timer')
  console.time('hello-timer')
}).listen(8000)

console.log('Server is running on port no 8000')
