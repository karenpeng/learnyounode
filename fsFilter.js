var fs = require('fs')
var path = require('path')

module.exports = function (fileDir, extName, callback) {

		fs.readdir(fileDir, function (err, list) {
				//console.log(list)
				if (err) {
						return callback(err)
				}

				var result = list.filter(function (file) {
						return path.extname(file) === '.' + extName
				})
				callback(null, result)

		})

}