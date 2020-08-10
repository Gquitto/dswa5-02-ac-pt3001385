const http = require('http');
const app = require('./config/express')();
const port = 3000;

http.createServer(app).listen(port, function(){
	console.log(`Started at ${port}`);
});