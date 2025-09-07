//understanding strings in javascript
let string1 = "Hello, World!";
let string2 = 'JavaScript is fun.';
let string3 = `Template literals are powerful.`;

console.log(string1);
console.log(string2);
console.log(string3);

// String concatenation
let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message);

// String methods
let sampleString = "  JavaScript String Methods  ";
console.log("Original String: '" + sampleString + "'");

//template literals
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

// String length
console.log("Length of sampleString: " + sampleString.length);

// escape characters
let escapedString = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(escapedString);
