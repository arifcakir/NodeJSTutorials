//node ./HttpServer.js diyerek çalıştırılşır

var http = require('http');
var server = http.createServer(function (request, response) {
    console.log('got request');
    console.log(request.headers);

    response.write('merhaba');
    console.log('sent response');
});

server.listen(3000);

console.log('Server works on http://127.0.0.1:3000')