// Creating a Queue:

// My Attempt:

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.first;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);

//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       const holdingPointer = this.last;
//       this.last = newNode;
//       this.last.next = holdingPointer;
//     }

//     this.length++;

//     return this;
//   }

//   dequeue() {
//     if (!this.first) {
//       console.log("The queue is empty!");

//       if (this.first === this.last) {
//         this.first = null;
//       }

//       this.first = this.first.next;

//       return null;
//     }
//   }

//   isEmpty() {}
// }

// const myQueue = new Queue();

// console.log(myQueue.enqueue("Joy"));
// console.log(myQueue.enqueue("Matt"));
// console.log(myQueue.enqueue("Pavel"));

// console.log(myQueue.dequeue());

// console.log(myQueue.peek());

// Solution:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;

      // const holdingPointer = this.last;
      // this.last = newNode;
      // this.last.next = holdingPointer;
    }

    this.length++;

    return this;
  }

  // dequeue() {
  //   if (!this.first) {
  //     console.log("The queue is empty!");

  //     if (this.first === this.last) {
  //       this.first = null;
  //     }

  //     this.first = this.first.next;

  //     return null;
  //   }
  // }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    // If we still wanted to have access to the person being dequeued, we would uncomment this line and return holdingPointer:
    // const holdingPointer = this.first;

    this.first = this.first.next;
    this.length--;

    return this;
  }

  isEmpty() {}
}

const myQueue = new Queue();

// console.log(myQueue.peek());

console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));

// console.log("peak:", myQueue.peek());

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

//   console.log(myQueue.peek());
