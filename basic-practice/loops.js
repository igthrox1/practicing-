//All types of loops in JavaScript

//1. For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//2. While Loop
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//3. Do-While Loop
console.log("\nDo-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//4. For...in Loop (used for iterating over object properties)
console.log("\nFor...in Loop:");
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//5. For...of Loop (used for iterating over iterable objects like arrays)
console.log("\nFor...of Loop:");
const arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}