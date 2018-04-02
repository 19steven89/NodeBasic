console.log("starting notes.js");

const fs = require("fs");

var fetchNotes = () =>{
  try{
      var notesString = fs.readFileSync("notesData.json");
      //read already existing notes from JSON file and add to the array
      //this is so that the existing notes dont get wiped every time a new note is added
       return JSON.parse(notesString);

  }catch(e){
    //return empty array if no notes exist
    return [];
  }
};

var saveNotes = (notes) =>{
  fs.writeFileSync("notesData.json", JSON.stringify(notes));

};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  }

  //loop through notes array titles to check for duplicates
  var duplicateNotetitle = notes.filter((note) => note.title === title);

  //if title isnt a duplicate then add the note to the array
  if(duplicateNotetitle.length === 0){
      //add note to the notes array
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};

var getAll = () => {
  console.log("getting all notes");
};

var getNote = (title) => {
  console.log("getting note", title);
};

var removeNote = (title) => {
  var notes = fetchNotes();
  //loop through notes array and add all notes to remove array except the
  //one with title passed in which is removed and then
  //new array is saved using saveNotes call
  var remove = notes.filter((note) => note.title !== title);
  saveNotes(remove);

  return notes.length !== remove.length;

};
//set add note = addNote function above meaning the function can be called from
//the app class
module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
