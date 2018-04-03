var person = {
  name: "steven"
};

person.age = "25";
//used to debug app in cli
//using node inspect <filename>
//then in debug mode use n for next
//and c for continue
//the debugger will stop the app in debug mode at this line when using c
//for continue to check the app
debugger;
person.name = "Mike";
console.log(person);

//using repl in debug mode can check the value of certain properties like
//person.age which will say 25 if app has reached line 5


//to run with debugger in CLi use
//node inspect app.js read --title="note title"
//this starts the app with the read command and then c to reach the "debugger;"
//statement
//use repl command followed by note to print the array note value passed in

//***very useful debuggin tool***

//when using chrome dev tools
//used node --inspect-brk app.js read --title="to buy" as as e.g.
//input this in the command line and can then step through the code in chrome!
