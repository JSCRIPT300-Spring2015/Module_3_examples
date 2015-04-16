var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('customEvent', function (message) {
	console.log('customEvent emitted');
	console.log('customEvent message: ', message);
});

emitter.on('customEvent', function (message) {
	console.log('the message sent was ' + message.length + ' characters long');
});

emitter.on('anotherCustomEvent', function (message) {
	console.log(message);
});

emitter.emit('customEvent', 'Hello, class!');
emitter.emit('anotherCustomEvent', 'Hey there');