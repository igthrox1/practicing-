// 1) print all the marks of students using objects using for loop.
let marks = {
    ravi: 34,
    shubham: 78,
    harry: 99,
    rohan: 67,
    skillf: 100
}
console.log("Using for loop");
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
} 


// 2) print all the marks of students using objects using for in loop.
console.log("Using for in loop");
for (let key in marks) {
    console.log(key);
    console.log("The marks of " + key + " are " + marks[key]);
}


// 3) print all the marks of students using objects using for of loop.
console.log("Using for of loop");
for (let key of Object.keys(marks)) {
    console.log("The marks of " + key + " are " + marks[key]);
}
// 4) program to print try again until the user enters the correct number.
const prompt = require('prompt-sync')(); //this line is used to take input from the user in node.js environment

let correctNumber = 4;
let userInput;
do {
    userInput = prompt("Enter a number between 1 and 10: ");
    if (userInput != correctNumber) {
        console.log("Try again!");
    }
} while (userInput != correctNumber);
console.log("Congratulations! You entered the correct number."); 

//4)lets do in new way while loop 
userInput1 = null;
while (userInput1 != correctNumber) {
    userInput1 = prompt("Enter a number between 1 and 10: ");
    if (userInput1 != correctNumber) {
        console.log("Try again!");
    }
} 
console.log("Congratulations! You entered the correct number.");

//5) functions to calculate mean of 5 numbers
function mean(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}
let result = mean(4, 5, 6, 7, 8);
console.log("The mean of 4, 5, 6, 7 and 8 is " + result);