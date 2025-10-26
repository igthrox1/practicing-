//understandig arrays in javascript
let array1 = [1, 2, 3, 4, 5];
let array2 = ['apple', 'banana', 'cherry'];
let array3 = [true, false, true];
let array4 = [1, 'two', true, null, undefined, {name: 'Alice'}, [1, 2, 3]];

console.log(array1);
console.log(array2[1]); // Accessing element at index 1
console.log(array4[5].name); // Accessing property of object in array

//arrays are mutable
array1[0] = 10; // Changing first element
console.log(array1);

//length of array
console.log("Length of array1: " + array1.length);
console.log("Length of array2: " + array2.length);

//array converting to string
let arrayAsString = array1.toString(); 
console.log(arrayAsString)

//join method
let joinedArray = array2.join(" - ");
console.log(joinedArray);

//pop method
let poppedElement = array1.pop(); // removes last element
console.log("Popped element: " + poppedElement);
console.log(array1);

//push method
array1.push(6); // adds element at the end
console.log(array1);

//shift method
let fruits =['apple', 'banana', 'orange', 'mango'];

// Remove and get the first element
let firstFruit = fruits.shift();

console.log(firstFruit);  // Output: 'apple'
console.log(fruits);      // Output: ['banana', 'orange', 'mango']

//unshift method
fruits.unshift('kiwi'); // adds element at the start
console.log(fruits);

//delete method
delete fruits[1]; // deletes element at index 1 but does not change length
console.log(fruits); //[ 'kiwi', <1 empty item>, 'orange', 'mango' ]
console.log(fruits.length);

//concat method
let array5 = array1.concat(array2);
console.log(array5);

//sort method
let numbers = [541, 3478, 8415, 118, 172];
numbers.sort();  //sorts in ascending order by default
console.log(numbers);

//making array in ascending or descending order using compare function
numbers.sort(function(a, b){return a - b}); //ascending order
console.log(numbers);

numbers.sort(function(a, b){return b - a}); //descending order
console.log(numbers);

//reverse method
numbers.reverse();
console.log(numbers);

//splice method
let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 'a', 'b'); // at index 2, remove 1 element and add 'a' and 'b'
console.log(spliceArray); // [1, 2, 'a', 'b', 4, 5]

//slice method
let sliceArray = spliceArray.slice(1, 4); // from index 1 to index 4 (not inclusive)
console.log(sliceArray); // [2, 'a', 'b']

//for loop in array\
let numArray = [10, 20, 30, 40, 50];
for(let i = 0; i < numArray.length; i++){
    console.log(numArray[i]);
}
//for each loop(does not return a new array, just executes a provided function once for each array element and stores it )
numArray.forEach((element) => {
    console.log(element);
})

//array from method
let str = "hello";
let strArray = Array.from(str);
console.log(strArray); // ['h', 'e', 'l', 'l', 'o']

//for in loop
for(let index in numArray){
    console.log(numArray[index]);
}

//for of loop
for(let value of numArray){
    console.log(value);
}

//map method(creates a new array populated with the results of calling a provided function on every element in the calling array)
numArray1 = [10, 20, 30, 40, 50];
let mappedArray = numArray1.map((value) => value * 2);
console.log(mappedArray); // [20, 40, 60, 80, 100]

//filter method(creates a new array with all elements that pass the test implemented by the provided function)
let filteredArray = numArray1.filter((value) => value > 25);
console.log(filteredArray); // [30, 40, 50]

//reduce method(executing a reducer function on each element of the array, resulting in a single output value)
let sum = numArray1.reduce((a,b)=>{
    return a + b; //this is used for summing up all elements in the array
})
console.log(sum); //150BOM.JS