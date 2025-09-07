//understanding strings in javascript
let string1 = "Hello, World!";
let string2 = 'JavaScript is fun.';
let string3 = `Template literals are powerful.`;

console.log(string1);
console.log(string2[1]); // Accessing character at index 1
console.log(string3[5]); // Accessing character at index 5

// String concatenation
let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message);

//template literals
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

// String length
let sampleString = "  JavaScript String Methods  ";
console.log("Length of sampleString: " + sampleString.length);

// escape characters
let escapedString = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(escapedString);

// String methods

console.log("Original String: '" + sampleString + "'");
console.log("Uppercase: '" + sampleString.toUpperCase() + "'");
console.log("Lowercase: '" + sampleString.toLowerCase() + "'");
console.log("Slice (0, 10): '" + sampleString.slice(0, 10) + "'");
console.log("Slice (-7): '" + sampleString.slice(-7) + "'"); //this will give last 7 characters from last of string
console.log("Slice (3): '" + sampleString.slice(3) + "'");
console.log("concat with ' is great!': '" + sampleString.concat(" is great!") + "'");
console.log("Trimmed: '" + sampleString.trim() + "'");//this will remove spaces from start and end of string
console.log("Substring (0, 10): '" + sampleString.substring(0, 10) + "'");
console.log("Index of 'String': " + sampleString.indexOf("String"));
console.log("Replace 'Methods' with 'Functions': '" + sampleString.replace("Methods", "Functions") + "'");
console.log("Length of string: " + sampleString.length);

//strings are immutable
let immutableString = "Hello";
immutableString[0] = "h"; // This won't change the string
console.log(immutableString); // Output: Hello

// print all the characters of a string using for loop
let str = "JavaScript";
console.log("Using for loop");
for (let i = 0; i < str.length; i++) {
    console.log("Character at index " + i + ": " + str[i]);
}
