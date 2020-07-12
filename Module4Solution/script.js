// ***********************************************
// Harder Starting Point for Module 4 Assignment
// ***********************************************
//
// Module 4 Assignment
// This program says "Hello" to any name, except names that
// start with a "J" or "j", then the program says "Good Bye"

/*
Sample Output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// script.js is wrapped in an immediately invoked function expression
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over names
for (var i = 0; i < names.length; i++) {

  // Retrieve the first letter of the current name in the loop.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // If first letter is 'j' or 'J', calls byeSpeaker.speak, else 
  // calls helloSpeaker.speak with name[i]
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
