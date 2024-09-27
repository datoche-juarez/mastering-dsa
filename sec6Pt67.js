// This is the optional classes in js section

// Reference
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false
object1.value = 15;
console.log(object2.value); // 15

console.log("Object1: ", object1);
console.log("Object2: ", object2);
console.log("Object3: ", object3);

// Context vs. Scope
function b() {
  let a = 4;
}

// Remember that these would work in the dev tools window in the browser!!
// console.log("a:", a); // ReferenceError: a is not defined
// console.log(this); // Window
// console.log(this === window); // true

// This is still referring to the window object
function a() {
  console.log(this);
}

a();

// To create a new function outside of the window object:
const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

//Instantiation
class Player {
  constructor(name, type) {
    console.log("Player: ", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, and I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard: ", this);
  }
  play() {
    console.log(`Weee, I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
