//package JSON file is created by using npm init from terminal

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const titleUtility = {
  describe: "Title of note",
  demand: true,
  alias: 't'
};

const bodyUtility = {
  describe: "Body of note",
  demand: true,
  alias: 'b'
};

//the npm yargs lets us access useful CLI commands
//help() can be used in the cli to run a help menu for this app
// with: node app.js add --help
const argv = yargs.command('add', 'Add a new note', {
  //functionality added to force user to enter a title name
  //alias used to save user putting title when running program
  //can now use node app.js add -t="Flag title"
  title: titleUtility,
  body: bodyUtility
  })
  .command('list', 'list all notes')
  .command('read', 'read a note',{
      title: titleUtility,
})
  .command('remove', 'remove a note',{
      title: titleUtility
})
.help()
.argv;

//get 3rd argument from cli for processing below using yargs
var command = argv._[0];
// console.log("Command: ", command);
// console.log("Yargs: ", argv);

if(command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note created");
    notes.logNote(note);
  }else{
    console.log("Title already exists");
  }

}else if(command === "list"){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s)`);

    allNotes.forEach((note) =>{
      notes.logNote(note);
    });

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
