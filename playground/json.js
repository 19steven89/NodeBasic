// var obj = {
//   name: "Steven"
// };
//
// //stringify parses object to string type
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personstr = '{"name": "Steven", "age": "29"}';
// var person = JSON.parse(personstr);
// console.log(typeof person);
// console.log(person);

//code to save newly added note
const fs = require("fs");
var originalNote = {
  title: "Some title",
  body: "Some Body"
};
var originalNoteString = JSON.stringify(originalNote);
//create JSON file which stores object as string type 
fs.writeFileSync("notes.json", originalNoteString);

//code to read note
var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
