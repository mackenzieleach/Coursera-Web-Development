// SpeakGoodBye.js is wrapped in an immediately invoked function expression
(function(window){
	var byeSpeaker = {};
	byeSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}

// DO NOT attach to 'byeSpeaker' object.
var speakWord = "Good Bye";

// Expose byeSpeaker to the global scope
window.byeSpeaker = byeSpeaker;
})(window);