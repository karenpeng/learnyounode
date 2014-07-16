var fs = require('fs')
var path = require('path')

module.exports = function(fileDir, extName, callback){

fs.readdir(fileDir,function(err, list){
	//console.log(list)
	if(err){
		return callback(err)
	}

	else{

		var data = function(){
			for(var i = 0 ; i < list.length; i++){
				if(path.extname(list[i]) === extName){
			//console.log(list[i])
		}
	}
 }) 
		}
		callback(null, data);
	}


}