//package JSON file is created by using npm init from terminal

console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const argv = yargs.argv;

//get 3rd argument from cli for processing below using yargsA
var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs: ", argv);


if(command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note created");
    notes.logNote(note);
  }else{
    console.log("Title already exists");
  }

}else if(command === "list"){
  notes.getAll();
}else if(command === "read"){
  var readNote = notes.getNote(argv.title);
  if(readNote){
    console.log("Reading Note");
    notes.logNote(readNote);
  }else{
    console.log("Note does not exist");
  }

}else if(command === "remove"){
  var noteremoved = notes.removeNote(argv.title);
  var msg = noteremoved ? "Note has been removed" : "Note not found";
  console.log(msg);
}else{
  console.log("Command not recongnised");
}
