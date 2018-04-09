var fs = require('fs');
var path = require('path');
var file = __dirname + '/file.txt';


//console a bakıldığında önce operation cpmplete yazıyor diakkat.
//yani async çalışıyor.
fs.readFile(file, function (err, data)
{
    if (err) {
        console.log("error" + err);
    }
    else {
        console.log("data is red" + data.toString());
    }
});

console.log("operation complete");

