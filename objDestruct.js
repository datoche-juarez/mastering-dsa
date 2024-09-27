const personOne = {
    name: 'Dan',
    age: 34,
    address: {
        city: 'Dearborn',
        state: 'MI'
    }
}

const personTwo = {
    name: 'Sally',
    age: 24,
    address: {
        city: 'Tulsa',
        state: 'OK'
    }
}

const { name, age } = personTwo;

console.log(name);
console.log(age);