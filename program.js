// var sum = 0

// for(var i = 2; i < process.argv.length; i++){
// 	sum += Number(process.argv[i])
// }

var fs = require('fs')
var path = require('path')
var http = require('http')
var bl = require('bl')
var async = require('async')

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1 )

// fs.readFile(process.argv[2],function(err, data){
// 	console.log(data.toString().split('\n').length -1 );

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

/*
var fsFilter = require('./fsFilter')
var dir = process.argv[2]
var filterStr = process.argv[3]

fsFilter(dir, filterStr, function (err, list) {

		if (err)
				return console.log("err")

		list.forEach(function (file) {
				console.log(file)
		})

})
*/

/*
var url = process.argv[2];
http.get(url, function (res) {
		res.setEncoding('utf8')
		res.on('data', function (data) {
				console.log(data)
		})
		res.on('error', function (error) {
				console.log("error")
		})
})
*/

/*

var url = process.argv[2]
		//console.log(process.argv[2])

http.get(url, function (res) {
		res.setEncoding('utf8');
		res.pipe(bl(function (err, data) {
				//data.setEncoding('utf8')
				console.log(data.toString('utf8').length);
				console.log(data.toString('utf8'));
		}));
		// res.on('data',function(data){
		// 	//console.log(data.toString().length);
		// 	console.log(data);
		// })
})

*/

var url = process.argv[2]
		//console.log(process.argv[2])
var result = [];
//var i = 0;
function getData(i, total) {
		http.get(process.argv[2 + i], function (res) {
				res.setEncoding('utf8');
				res.pipe(bl(function (err, data) {
						//data.setEncoding('utf8')
						//console.log(data.toString('utf8').length);
						//console.log(data.toString('utf8'));
						//return true;
						//result.push(data.toString('utf8'));
						console.log(data.toString('utf8'));
						i++;
						if (i < total) {
								//console.log(data.toString('utf8'))
								getData(i);
						} else {
								for (var j = 0; j < result.length; j++) {
										//	console.log(result[j])
								}
						}

				}));
		})
}
getData(0, 3);
// //async.series([
// function queup() {
// 		if (getData(process.argv[2])) {
// 				if (getData(process.argv[3])) {
// 						getData(process.argv[4])
// 				}
// 		}

// }
// //])

// async.series([
// 		getData(process.argv[2]),
// 		getData(process.argv[3]),
// 		getData(process.argv[4])
// ]);

//console.log(result)

// queup();