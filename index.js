let http = require('http')
let uri = '127.0.0.1'
let port = 1337

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	})

	res.end("Done")

}).listen(port, uri)
console.log('Server running at http://' + uri + ':' + port + '/')
