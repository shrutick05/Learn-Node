'use strict'

let util = require('util')
let eventEmitter = require('events').EventEmitter
let fs = require('fs')

function InputChecker(name, file) {
  this.name = name
  this.writeStream = fs.createWriteStream('./' + file + '.txt', {
    'flags' : 'a',
    'encoding': 'utf8',
    'mode': 0o666
  })
}
util.inherits(InputChecker, eventEmitter)
InputChecker.prototype.check = function check(input) {
  let command = input.trim().substr(0, 3)
  if(command === 'wr:') {
    this.emit('write', input.substr(3, input.length))
  } else if(command == 'en:') {
    this.emit('end')
  } else {
    this.emit('echo', input)
  }
}

let ic = new InputChecker('Shelley', 'output')
ic.on('write', data => {
  this.writeStream.write(data, 'utf8')
})
ic.on('echo', data => {
  process.stdout.write(ic.name + ' wrote ' + data)
})
ic.on('end', () => {
  process.exit()
})

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  let input = process.stdin.read()
  if(input !== null) {
    ic.check(input)
  }
})
