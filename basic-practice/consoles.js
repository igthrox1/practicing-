//types of consoles
console.log("This is a log message");
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");
console.clear();``

//console.assert(explanation:- used to test if a condition is true, if not it will log an error message)
console.assert(1 === 2, "1 is not equal to 2");

//console.table(explanation:- used to display data in a tabular format)
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.table(users);

//console.time and console.timeEnd(explanation:- used to measure the time taken by a block of code to execute)
console.time("loopTime");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loopTime");

