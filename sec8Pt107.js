// Creating our first linked list data structure in javascript

// 10 --> 5 ---> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// class LinkedList {
//     constructor(value) {
//       this.head = {
//         value: value,
//         next: null,
//       };
//       this.tail = this.head;
//       this.length = 1;
//     }
//     append(value) {
//       const newNode = {
//         value: value,
//         next: null,
//       };
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//     prepend(value) {
//       const newNode = {
//         value: value,
//         next: null,
//       };
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//       return this;
//     }
//     printList() {
//       const array = [];
//       let currentNode = this.head;
//       while (currentNode !== null) {
//         array.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return array;
//     }
//     insert(index, value) {
//       //Check params
//       if (index >= this.length) {
//         return this.append(value);
//       }
//       const newNode = {
//         value: value,
//         next: null,
//       };
//       const leader = this.traverseToIndex(index - 1);
//       const holdingPointer = leader.next;
//       leader.next = newNode;
//       newNode.next = holdingPointer;
//       this.length++;
//       console.log(this.printList());
//       return this.printList();
//     }
//     traverseToIndex(index) {
//       // Check params later
//       let counter = 0;
//       let currentNode = this.head;
//       while (counter !== index) {
//         currentNode = currentNode.next;
//         counter++;
//       }
//       return currentNode;
//     }
//     remove(index) {
//       // Check params
//       if (index >= this.length) {
//         console.log("This index does not exist my friend...");
//       }
//       const leader = this.traverseToIndex(index - 1);
//       const unwantedNode = leader.next;
//       leader.next = unwantedNode.next;
//       this.length--;
//       return this.printList();
//     }
//     reverse() {
//         if (!this.head.next) {
//             return this.head;
//         }
//         let first = this.head;
//         this.tail = this.head;
//         let second = first.next;
//         while(second) {
//             const temp = second.next;
//             second.next = first;
//             first = second;
//             second = temp;
//         }
//         this.head.next = null;
//         this.head = first;
//         return this;
//     }
//   }

//   const myLinkedList = new LinkedList(10);
//   myLinkedList.append(5);
//   myLinkedList.append(16);
//   myLinkedList.prepend(1);
//   myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
//   console.log(myLinkedList.printList());
//   // myLinkedList.remove(500);
//   console.log(myLinkedList.remove(2));
//   console.log(myLinkedList.remove(2));
//   // console.log(myLinkedList.printList());
//   // myLinkedList.insert(2, 99);
//   // console.log(myLinkedList);
//   console.log(myLinkedList.reverse());

// September 19th, 2024 Refresher:

// Reverse a Linked List

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
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
    //Check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    console.log(this.printList());
    return this.printList();
  }
  traverseToIndex(index) {
    // Check params later
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check params
    if (index >= this.length) {
      console.log("This index does not exist my friend...");
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
// myLinkedList.remove(500);
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(2));
// console.log(myLinkedList.printList());
// myLinkedList.insert(2, 99);
// console.log(myLinkedList);
console.log(myLinkedList.reverse());
