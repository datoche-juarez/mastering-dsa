// Solution:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // If we wanted to return the item we're popping, we would uncomment this, and instead of returning 'this', we would return holdingPointer:

    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

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
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

// Pseudocode:

// class Node {
//   constructor() {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//     // View the top item:
//     // return this.top
//   }

//   push(value) {
//     // Add an item to the top of the stack:
//     // Check if there are any items in the stack
//     // If there are no items, this item is both this.top and this.bottom
//     // this.length++
//     // return this
//   }

//   pop() {
//     // Remove the top item from the stack:
//     // Check if there are any items in the stack
//     // If there are no items, console.log "no items in stack" and return
//     // Create a variable called elementToPop
//     // If there are more than one items in the stack:
//     // Set elementToPop to this.top
//     // Somehow check the item under this.top and set it to this.top
//     // this.length--;
//     // return elementToPop
//     // If there is only one item in the stack:
//     // Set elementToPop to this.top
//     // this.top === null
//     // this.bottom === null
//     // return elementToPop
//   }

//   // isEmpty (optional)
//   isEmpty() {
//     // Check if this.top and this.bottom === null
//     // If this is the case, return true;
//   }
// }

// const myStack = new Stack();