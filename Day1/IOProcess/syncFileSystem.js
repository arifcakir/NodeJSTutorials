
var fs = require('fs');
var path = require('path');
var file = __dirname + '/file.txt';




var data = fs.readFileSync(file);

console.log("operation complete");

