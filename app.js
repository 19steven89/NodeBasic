//package JSON file is created by using npm init from terminal

console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const argv = yargs.argv;

//get 3rd argument from cli for processing below using yargs
var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs: ", argv);

if(command === "add"){
  notes.addNote(argv.title, argv.body);
}else if(command === "list"){
  notes.getAll();
}else if(command === "read"){
  notes.getNote(argv.title);
}else if(command === "remove"){
  notes.removeNote(argv.title);
}else{
  console.log("Command not recongnised");
}
