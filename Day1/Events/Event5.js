var event = require("events");

//listener olarak tanımladık.
//ilgili evente listener ekliyoruz
var myEventListener = new event.eventEmitter();

var process = new myEventListener();





function event1(){

}

function event2(){

}



//process e yeni event eklendi
process.on("NewEvent", event1);


//process e yeni event eklendi
process.on("NewEvent", event2);



process.remove("NewEvent",event1);

process.removeAllListeners("NewEvent");



