var fs = require('fs');
var path = require('path');
var file = __dirname + '/file.txt';


//console a bakıldığında önce operation cpmplete yazıyor diakkat.
//yani async çalışıyor.
fs.stat(file, function (err, stats)
{
    if (err) {
        console.log("error" + err);
    }
    else {
        console.log("File stats are red");


        console.log(sts.isFile());
        console.log(sts.isBlockDevice()); //HDD CD vs
        console.log(sts.isSocket()); //port
      
    }
});

console.log("operation complete");

