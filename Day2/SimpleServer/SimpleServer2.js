//node ./SimpleServer2.js diyerek çalıştırılşır

var http = require('http');
var fs = require('fs');

function error404(response){

response.writeHead(404,{'Content-Type':'text/plain'});

response.write("page is not found")

response.end();

}


var server = http.createServer(function (request, response) {
    
if(request.method=='GET' && request.url=='/')
{

response.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname+'/simplepage.html').pipe(response);

}
else{

error404(response);

}


});

server.listen(3000);

console.log('Server works on http://127.0.0.1:3000')