var fs = require('fs')
var async = require('async')

async.waterfall([
  function readData(callback) {
    fs.readFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter3/output.txt', 'utf8', (err, data) => {
      callback(err, data)
    })
  },
  function modify(text, callback) {
    var adjdata=text.replace(/somecompany\.com/g,'burningbird.net');
    callback(null, adjdata);
  },
  function writeData(text, callback) {
    fs.writeFile('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter3/output.txt', text, function(err) {
      callback(err,text);
    });
  }
], (err, result) => {
  if(err) {
    console.error(err.message)
  } else {
    console.log(result)
  }
})
