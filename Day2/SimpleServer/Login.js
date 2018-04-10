
//node ./Login.js diyerek çalıştırılşır
var http = require('http');
var fs = require('fs');
var qs = require('querystring');



function error404(response){

response.writeHead(404,{'Content-Type':'text/plain'});

response.write("page is not found")

response.end();

}


var server = http.createServer(function (request, response) {
    
if(request.method=='GET' && request.url=='/')
{

response.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname+'/Login.html').pipe(response);

}
else if (request.method=='POST'){


console.log('POST begins');

var body = '';

request.on('data', function(chunk){

console.log(chunk);

body +=chunk;

    
});

request.on('end',function(){

var data = qs.parse(body);

response.writeHead(200);

response.end(JSON.stringify(data));




})




}


else{

error404(response);

}


});

server.listen(3000);

console.log('Server works on http://127.0.0.1:3000')