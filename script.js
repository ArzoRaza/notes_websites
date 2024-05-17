const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello Arzo how are you doing");
})

server.listen(3000);