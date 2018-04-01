//package JSON file is created by using npm init from terminal

console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

var command = process.argv[2];
console.log("Command: ", command);
console.log(process.argv);

if(command === "add"){
  console.log("Adding new note");
}else if(command === "list"){
  console.log("listing all notes");
}else if(command === "read"){
  console.log("fetching note to read");
}else if(command === "remove"){
  console.log("deleted note");
}else{
  console.log("Command not recongnised");
}
