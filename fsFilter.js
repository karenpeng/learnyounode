var fs = require('fs')
var path = require('path')

module.exports = function (fileDir, extName, callback) {
		if (err) callback(err)

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
}