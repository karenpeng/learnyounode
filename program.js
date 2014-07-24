// var sum = 0

<<<<<<< HEAD
// for(var i = 2; i < process.argv.length; i++){
// 	sum += Number(process.argv[i])
// }



var fs = require('fs')
var path = require('path')
var http = require('http')
var bl = require('bl')

//var fsFilter = require('./fsFilter')
=======
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i])
}

// var fs = require('fs')
// var path = require('path')
var fsFilter = require('./fsFilter')
>>>>>>> 903dfb41efee6543dff27be8db9624e2e3dcc7c9

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1 )

// fs.readFile(process.argv[2],function(err, data){
// 	console.log(data.toString().split('\n').length -1 );
<<<<<<< HEAD
//  }) console.log(process.argv[2])

// fs.readdir('../learnyounode', function(err, files){
// 	//console.log(files)
// 	console.log("CHANGELOG.md")
// 	console.log("LICENCE.md")
// 	for(var i = 0 ; i < files.length; i++){
// 		if(path.extname(files[i]) === '.md'){
// 			console.log(files[i])
// 		}
// 	}
//  }) 

// var dir = process.argv[2]
// var filterStr = process.argv[3]


// fsFilter(dir, filterStr, function(err, list){

// 	if(err)
// 		return console.log("err")

// 	list.forEach(function(file){
// 		console.log(file)
// 	})

// })
var url = process.argv[2]
//console.log(process.argv[2])

http.get(url, function(res){
	res.setEncoding('utf8');
	res.pipe(bl(function(err,data){
		//data.setEncoding('utf8')
		console.log(data.toString('utf8').length);
		console.log(data.toString('utf8'));
	}));
	// res.on('data',function(data){
	// 	//console.log(data.toString().length);
	// 	console.log(data);
	// })
})
=======
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
>>>>>>> 903dfb41efee6543dff27be8db9624e2e3dcc7c9
