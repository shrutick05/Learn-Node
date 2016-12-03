var zlib = require('zlib')
var gzip = zlib.createGzip()
var fs = require('fs')
var inp = fs.createReadStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/input.txt')
var out = fs.createWriteStream('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter6/input.txt')

inp.pipe(gzip).pipe(out)
