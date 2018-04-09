var event = require("events");
var myEventEmitter = new event.eventEmitter();


myEventEmitter.on("NewEvent",function(param1){
console.log("event 1 works " + param1);
});


myEventEmitter.on("NewEvent",function(param1){
    console.log("event 2 works " + param1);
    });

//C# daki delegate
//myEventEmitter.listener("NewEvent").array.forEach(element => {
//    param1="murat";
//    element(param1);
//});   

//C# daki delegate
myEventEmitter.listener("NewEvent").array.forEach(function(listener) {
        param1="murat";
        listener(param1);
    });