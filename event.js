// Events - Event Driven Programming is used heavily used in Node.js
// The events module in Nodejs provides an 'EventEmitter' class that facilitates events handling and emitting in consistent manner.

//the EventEmitter is class here and we need to make it object
const EventEmitter = require('events')

 
//creating the instance of it i.e object
const customEmitter = new EventEmitter();

// the name of the event is response and on method is used to listen the event and when the event is emit, the callback fuction is called.
customEmitter.on('response', ()=>{
    console.log(`data received`);
})

//emiting the response events
customEmitter.emit("response")

//In the above code the order of .on an .emit matter. we have to listen to event first with the help of .on and then the event can be emit.