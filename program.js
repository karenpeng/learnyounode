// var sum = 0

// for(var i = 2; i < process.argv.length; i++){
//  sum += Number(process.argv[i])
// }

var fs = require('fs')
var path = require('path')
var http = require('http')
var bl = require('bl')
var async = require('async')
var net = require('net')
var map = require('through2-map')
var url = require('url')

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1 )

// fs.readFile(process.argv[2],function(err, data){
//  console.log(data.toString().split('\n').length -1 );

//  }) console.log(process.argv[2])

// fs.readdir('../learnyounode', function(err, files){
//  //console.log(files)lea
//  for(var i = 0 ; i < files.length; i++){
//    if(path.extname(files[i]) === '.md'){
//      console.log(files[i])
//    }
//  }
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
    //  //console.log(data.toString().length);
    //  console.log(data);
    // })
})

*/

/*
var url = process.argv[2]

function getData(i) {
    http.get(process.argv[2 + i], function (res) {
        res.setEncoding('utf8');
        res.pipe(bl(function (err, data) {

            console.log(data.toString('utf8'));
            i++;
            if (i < 3) {
                getData(i);
            }
        }));
    })
}
getData(0);
*/

/*
var date = new Date()
function addZero(number){
  if(number<10) return '0'+number
    else return number
}
var data = date.getFullYear() +  "-" + addZero((date.getMonth()+1)) + "-" + addZero(date.getDate()) + " "
            + addZero(date.getHours()) + ":" + addZero(date.getMinutes());
//console.log(data)
var server = net.createServer(function(socket){
  //socket.write(data)
  socket.end(data + '\n')
})
server.listen(Number(process.argv[2]));
*/

/*
var server = http.createServer(function(req, res){
  var src = fs.createReadStream(process.argv[3])
  src.pipe(res)
  // res.pipe(bl(function(err, data){

  // }))
})
server.listen(Number(process.argv[2]))
*/

/*
var server = http.createServer(function(req, res){
  req.pipe(map(function (chunk){
    return chunk.toString().toUpperCase()
  })).pipe(res)
})
server.listen(Number(process.argv[2]))
*/

/*
var getData = function(date){
  return{
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds()
  }
}

var getData2 = function(date){
  return{
    unixtime: date.getTime()
  }
}



var server = http.createServer(function(req, res){
  if(req.method === 'GET'){
    var p = url.parse(req.url, true)
    //console.log(p)
    var time = new Date(p.query.iso);
    var result;

  if (/^\/api\/parsetime/.test(req.url))
    result = getData(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = getData2(time)

    var finalData = JSON.stringify(result);
    // if(p.pathname === '/api/parsetime'){
    //  //console.log("d")
    //  //res.writeHead(200, finalData)
    //  //res = finalData
    //  var finalData = JSON.stringify(getData(p.));
    //console.log(finalData)
      res.write(finalData)
    // }

  }else{
    console.log("give me a get request")
  }
})
server.listen(Number(process.argv[2]))
*/