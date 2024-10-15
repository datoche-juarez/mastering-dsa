// October 9th, 2024

// Examples of Linear Search:
// Time Complexity O(n) or best case O(1) if it's the first item in the list

var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

console.log(beasts.indexOf("Godzilla"));

console.log(
  beasts.findIndex(function (item) {
    return item === "Godzilla";
  })
);

// Same as above using an arrow function:
console.log(
  beasts.findIndex((item) => 
    item === "Godzilla"
  )
);

console.log(
  beasts.find(function (item) {
    return item === "Godzilla";
  })
);

beasts.includes('Godzilla')