var event = require("events");

//listener olarak tanımladık.
//ilgili evente listener ekliyoruz
var myEventListener = new event.eventEmitter();

var process = new myEventListener();



// newlistener  etiketi  özel isim
//yeni event eklendiğince çalışan event i çalıştırıyoruz aslında
process.on("newListener",function(listenerName,listenerFunc){
    console.log("event works " + listenerName);
});



//process e yeni event eklendi
process.on("NewEvent",function(){
    console.log("NewEvent1 works");
});


process.on("NewEvent",function(){
    console.log("NewEvent2 works");
});

process.listenters("NewEvent").array.forEach(listener => {
    listener();
});



