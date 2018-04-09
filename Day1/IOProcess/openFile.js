var fs = require('fs');
var path = require('path');
var file = __dirname + '/openfile.txt';


//console a bakıldığında önce operation cpmplete yazıyor diakkat.
//yani async çalışıyor.
fs.open(file, "ax", function (err, fd)
{
    if (err) {
        //dikkat console error kullandık. log kullanmadık. console.error operasyonu durdururu.
        console.error("error" + err);
    }
    else {
        console.log("file is opened");
    }
});

console.log("operation complete");

