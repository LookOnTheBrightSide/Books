var Emitter = require('events');
var emtr = new Emitter();

emtr.on('greet', function () {
    console.log("An event happend, greet called!");
});
console.log('hello');
emtr.emit('greet');