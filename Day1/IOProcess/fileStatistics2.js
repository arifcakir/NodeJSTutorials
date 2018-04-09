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


        console.log(stats.isFile());
        console.log(stats.isBlockDevice()); //HDD CD vs
        console.log(stats.isSocket()); //port

        //ve diğer istatistikler

        console.log(stats);
      
    }
});

console.log("operation complete");

