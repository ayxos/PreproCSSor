var sys = require("sys");
var http = require("http");
var fs = require('fs');
var index = fs.readFileSync('dest/index.html');

var PORT = 8003;

http.createServer(function(request,response){
	sys.puts("Creating server...");
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.write("This server has been created using node.js, also this line has been inserted using write command");
	response.end(index);
}).listen(PORT);
sys.puts("Server Running on port " + PORT);	
