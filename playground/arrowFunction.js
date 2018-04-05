//*Important point to note: you cannot use this keyword in arrow functions
//as the function cannot use it*

var square = (x) => {
  var result = x * x;
  return result;
};

//arrow function example simplified with 1 statement, so the {} isn't required
var cubed = (y) => y * y * y;


var user = {
  name: "Steven",
  sayHi: () => {
    console.log(`Hi ${user.name}`);
  },

  sayHiAlt() {
    //also cant use this line in arrow functions which outputs the
    //arguments passed to the function when the app is ran
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(0, 1);
console.log(square(9));
console.log(cubed(3));
