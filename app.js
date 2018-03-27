console.log("starting app.js");

//fetch all of the contents of the fs module from the node api
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var res1 = notes.add(5, 4);
console.log("Result: " + res1);

// var user = os.userInfo();

//console.log(user);

//using the fs module the first param creates file
//2nd param is the text stored in the file
//using ES6 can use template strings to access var names with ``
// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}`);
