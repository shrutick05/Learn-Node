var http = require('http')
var express = require('express')

var name = "Shruti"
var place = "Bangalore"

const app = express()
var http = require('http').Server(app)

app.get('/', (req, res) => {
    res.send(name + ' is from ' + place)
})

http.listen(process.env.PORT || 3000, function () {
  console.log('server Started!')
})

console.log('Server is running on port 3000')
console.log('I will be executed without waiting')
console.log('end of file')
