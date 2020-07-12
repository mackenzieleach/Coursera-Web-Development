// SpeakHello.js is wrapped in an immediately invoked function expression

(function (window) {
	var helloSpeaker = {};
	helloSpeaker.speak = function(name) {
		console.log(speakWord + " " + name)
	}

// DO NOT attach to 'helloSpeaker' object.
var speakWord = "Hello";

// Expose helloSpeaker to the global scope
window.helloSpeaker = helloSpeaker;
})(window);