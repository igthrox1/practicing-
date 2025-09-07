//undersatnding functions in javascript

//function declaration
function greet(name){
    console.log("Hello " + name);
}

//function expression
const square = function(number){
    return number * number;
};

//arrow function
const add = (a, b) => { return a + b; };

//calling the functions
greet("Alice"); // Output: Hello Alice
console.log(square(4)); // Output: 16
console.log(add(3, 5)); // Output: 8    