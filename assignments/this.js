/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding => Using "strict mode" to bypass window object of .this.
* 2. Implicit binding => Makes use of .this keyword.
* 3. New binding => Creates a new function based on a constructor, uses the "new" keyword.
* 4. Explicit binding => Uses apply, call, and bind to point to .this.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);
function goodbye (param) {
  "use strict";
  console.log(this);
  return `I am going to say ${param}`;
}
console.log(goodbye('goodbye'));

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const dog = {
    name:"Bacon",
    age:6,
    food:"Beef jurkey",
    likesTo: function (){
        return `${this.name} likes to eat ${this.food}`
    },
};

console.log(dog.likesTo())

// Principle 3

function Fish(size){
   this.size = size;
   this.howBig = function(){
     return `This fish is ${size}`
   };
}

const goldfish = new Fish("small");

console.log(goldfish.howBig())
// code example for New Binding

// Principle 4
const myname = {
    name: "Dalton"
}; 

let pets = ["Dog", "Bearded dragon"];

function myanimals(pet, pet2){
    "use strict";
    return `My name is ${this.name} and i have a ${pet} and a ${pet2}`
}

console.log(myanimals.apply(myname, pets))

// code example for Explicit Binding