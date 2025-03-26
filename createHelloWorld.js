// 2667. Create Hello World Function
// March 14th, 2025

/**
 * @return {Function}
 */

var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};

const f = createHelloWorld();
console.log(f([{}, null, 42]));