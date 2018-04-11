var connect = require('connect');
var serverStatic = require('serve-satatic');

connect().use(serverStatic(__dirname)).listen(3000, function(){

console.log("server running 3000");


});
