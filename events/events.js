// var fs = require ('fs');
// var rs = fs.createReadStream('./demofile.txt');

// rs.on('open',function(){
    
// });


var events = require("events");
var eventEmitter = new events.EventEmitter();

// create an event handler:

var myEventHandeler = function(){
    console.log("I hear a scream");
}

//Assign the event handler to an event 
eventEmitter.on('scream',myEventHandeler);

//fire the 'scream' event:
eventEmitter.emit('scream')
