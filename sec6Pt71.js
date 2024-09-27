// Implementing An Array (added on September 12th, 2024 ***)
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    const lastItem = this.data[this.length - 1];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push("are");
newArray.push("nice");
newArray.delete(1);

console.log(newArray);

// This is the instructor solution for the last problem
// Create a function that reverses a string
// 'Hi my name is Andrei' should be:
// 'ierdnA si eman ym iH'

function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str != "string") {
    return "hmm that is not good!";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

// console.log(reverse('Hi my name is Andrei'));

// Using the reverse method would save us from having to do all the looping:
function reverse2(str) {
  return str.split("").reverse().join("");
}

// console.log(reverse2('Hi my name is Andrei'));

// Using ES6 syntax:

const reverse3 = (str) => str.split("").reverse().join("");

// console.log(reverse3('Hi my name is Andrei'));

// Using the spread operator instead of using split():

const reverse4 = (str) => [...str].reverse().join("");

// console.log(reverse4('Hi my name is Andrei'));
