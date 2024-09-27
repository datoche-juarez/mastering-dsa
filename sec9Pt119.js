const a = 1;

// Call stack
console.log("1");

// This makes things asynchronous:
setTimeout(() => {
  console.log("2");
}, 2000);

console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// Recursive function which creates a stack overflow when run in the browser:

function foo() {
  foo();
}

foo();

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

element.addEventListener("click", () => {
  console.log("click");
});
