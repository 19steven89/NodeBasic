console.log("starting notes.js");

var addNote = (title, body) => {
  console.log("adding note", title, body);
};

var getAll = () => {
  console.log("getting all notes");
};

var getNote = (title) => {
  console.log("getting note", title);
};

var removeNote = (title) => {
  console.log("removing note", title);
};
//set add note = addNote function above meaning the function can be called from
//the app class
module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
