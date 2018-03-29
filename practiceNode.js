//package JSOn file is created by using npm init from terminal

console.log("starting app.js");

//fetch all of the contents of the fs module from the node api
const fs = require('fs');
const os = require('os');
//require lodash npm package installed from terminal using npm install lodash --save
//which saves as a dependency in package.json file
const _ = require('lodash');
const notes = require('./notes.js');

var noDuplicateArray = _.uniq(["Mike"]);
console.log(noDuplicateArray);

// console.log(_.isString(true));
// console.log(_.isString("steven"));

// var res = notes.addNote();
// console.log(res);
// var res1 = notes.add(5, 4);
// console.log("Result: " + res1);
//using the fs module the first param creates file
//2nd param is the text stored in the file
// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}`);
