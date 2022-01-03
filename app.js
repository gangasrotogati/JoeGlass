const http = require('http')
const fs = require('fs')
const url = require('url')
const port = process.env.PORT || 3000

const server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/html' })
	let q = url.parse(req.url, true);
	if (q.pathname == "/") {
		q.pathname = "/default.html"
    }
	let filename = "." + q.pathname;
	fs.readFile( filename, function(error, data){
		if(error){
			res.writeHead(404)
			res.write('Error: File Not Found')
		} else {
			res.write(data)
		}
		res.end()
	})
})

server.listen(port, function(error){
	if(error) {
		console.log('Something went wrong', error)
	} else {
		console.log('Server is listening on port ' + port)
	}
})