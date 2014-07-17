var sum = 0

for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i])
}

// var fs = require('fs')
// var path = require('path')
var fsFilter = require('./fsFilter')

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1 )

// fs.readFile(process.argv[2],function(err, data){
// 	console.log(data.toString().split('\n').length -1 );
//  })

//console.log(process.argv[2])
// fs.readdir(process.argv[2], function (err, files) {
//   //console.log(files)
//   for (var i = 0; i < files.length; i++) {
//     if (path.extname(files[i]) === '.' + process.argv[3]) {
//       console.log(files[i])
//     }
//   }
// })

fsFilter(process.argv[2], process.argv[3], function () {

});