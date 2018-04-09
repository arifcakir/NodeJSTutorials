var event = require("events");
var myEventEmitter = new event.eventEmitter();
myEventEmitter.on("NewEvent",function(){
console.log("event works");
});

myEventEmitter.emit("eventObject");
