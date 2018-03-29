console.log("starting notes.js");
// console.log(module);

//=> is an anonymous function which saves writing function()etc..
module.exports.addNote = () => {
  console.log("in addNote Function");
  return "New Note";
};
