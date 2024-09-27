// Creating a Stack with an Array Solution:

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);

    return this;
  }

  pop() {
    this.array.pop();

    return this;
  }

  // isEmpty (optional)
  isEmpty() {
    // Check if this.top and this.bottom === null
    // If this is the case, return true;
  }
}

const myStack = new Stack();

console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.peek());
