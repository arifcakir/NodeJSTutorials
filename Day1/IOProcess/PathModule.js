var path = require('path');

var file = './file.txt';

var fileName = path.basename(file);
console.log(fileName);

var ext = path.extname(file);
console.log(ext);

var dirname = path.dirname(file);
console.log(dirname);
