// Example 2-8. A sequential synchronous application
var fs = require('fs')
try {
  var data = fs.readFileSync('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/apple.txt', 'utf8')
  console.log(data)
  var adjData = data.replace(/[A|a]pple/g, 'orange')
  fs.writeFileSync('/home/shruti/geekskool/GeekSkool/Nodejs/LearningNode-O\'Rielly/Chapter2/orange.txt', adjData)
} catch(err) {
  console.log(err)
}
