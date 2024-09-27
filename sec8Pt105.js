// // Creating our first linked list data structure in javascript

// // 10 --> 5 ---> 16

// // let myLinkedList = {
// //     head: {
// //         value: 10,
// //         next: {
// //             value: 5,
// //             next: {
// //                 value: 16,
// //                 next: null
// //             }
// //         }
// //     }
// // }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     //Check params
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const follower = leader.next;
//     leader.next = newNode;
//     newNode.prev = leader;
//     newNode.next = follower;
//     follower.prev = newNode;
//     this.length++;
//     console.log(this.printList());
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     // Check params later
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // Check params
//     if (index >= this.length) {
//       console.log("This index does not exist my friend...");
//     }
//     const leader = this.traverseToIndex(index - 1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
// }

// const myLinkedList = new DoublyLinkedList(10);
// console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.insert(1, 99));
// // myLinkedList.insert(20, 88);
// // console.log(myLinkedList.printList());
// // myLinkedList.remove(500);
// // console.log(myLinkedList.remove(2));
// // console.log(myLinkedList.remove(2));
// // console.log(myLinkedList.printList());
// // myLinkedList.insert(2, 99);
// // console.log(myLinkedList);

// // Implement remove() for Doubly Linked List ***

// September 18th, 2024 Refresher:

class DoublyLinkedList {
  constructor(value) {
    if (value === undefined || value === null) {
      throw new Error("A valid initial value must be provided");
    }

    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (value === undefined || value === null) {
      throw new Error("A valid value must be provided.");
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    if (value === undefined || value === null) {
      throw new Error("A valid value must be provided.");
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer.");
    }

    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds.");
    }

    if (value === undefined || value === null) {
      throw new Error("A valid value must be provided.");
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    return this.printList;
  }

  traverseToIndex(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer.");
    }

    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds.");
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // ** On your own, create a function to traverse backwards through a double linked list. This is not even mentioned in the course.
  traverseToIndexBackwards(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer.");
    }

    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    let counter = this.length - 1;
    let currentNode = this.tail;

    while (counter !== index) {
      currentNode = currentNode.prev;
      counter--;
    }

    return currentNode;
  }

  // ** On your own, update this function to work with doubly linked lists:
  remove(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer.");
    }

    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds.");
    }

    if (index === 0) {
      // Remove head
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (index === this.length - 1) {
      // Remove tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // Remove node in the middle
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;
    }

    this.length--;

    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
// console.log(myLinkedList);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.insert(1, 99);

// myLinkedList.insert(20, 88);
// console.log(myLinkedList);
// myLinkedList.remove(2);
// myLinkedList.remove(2);
myLinkedList.remove(4);
myLinkedList.remove(3);
myLinkedList.remove(2);
myLinkedList.remove(1);
myLinkedList.remove(0);
console.log(myLinkedList.printList());

myLinkedList.append(24);
myLinkedList.append(25);

// console.log(myLinkedList.traverseToIndexBackwards(1));

// const node = myLinkedList.traverseToIndexBackwards(2);
// const node = myLinkedList.traverseToIndex(2);
// console.log("Value:", node.value);

console.log(myLinkedList.printList());
// console.log(myLinkedList);
