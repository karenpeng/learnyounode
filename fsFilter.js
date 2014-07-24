var fs = require('fs')
var path = require('path')

module.exports = function (fileDir, extName, callback) {
		if (err) callback(err)

<<<<<<< HEAD
fs.readdir(fileDir,function(err, list){
	//console.log(list)
	if(err){
		return callback(err)
	}

	var result = list.filter(function (file){
		return path.extname(file) === '.'+ extName
	})
	callback(null, result)

})

=======
		fs.readdir(fileDir, function (err, files) {
				//console.log(files)
				for (var i = 0; i < files.length; i++) {
						if (path.extname(files[i]) === '.' + extName) {
								//console.log(files[i])
								return files[i]
						}
				}
		})
		callback(null, data);
>>>>>>> 903dfb41efee6543dff27be8db9624e2e3dcc7c9
}