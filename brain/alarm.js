var EventEmitter = require('events').EventEmitter;
var util = require('util');

//TODO: figure out how Date module works...

var timer = function(time, callback){
	var self = this;
	setTimeout(function(){
		self.emit('ring');
	}, time);
	self.on('ring', callback);

};
util.inherits(timer, EventEmitter);

//this.on('snooze', function(){
//	//extend alarm
//});


exports.timer = timer