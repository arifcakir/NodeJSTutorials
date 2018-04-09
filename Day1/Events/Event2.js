var event = require("events");
var myEventEmitter = new event.eventEmitter();
myEventEmitter.on("NewEvent",function(param1){
console.log("event works " + param1);
});

myEventEmitter.emit("eventObject","Hello");
myEventEmitter.emit("eventObject","Hi");