//1)create array and take input from user and add it to array 
let array1 = [1, 2, 3, 4, 5];
a = Number.parseInt(prompt("Enter a number to add to array1: "));
array1.push(a);
console.log(array1);

//2) keep adding elements to array until user enters 0
let array2 = [];
while(true){
    let b = Number.parseInt(prompt("Enter a number to add to array2 (enter 0 to stop): "));
    if(b === 0){
        console.log(array2);
        break;
    }
    array2.push(b);
}


//3) fillter the given array by the number divisible by 10
let array3 = [10, 23, 45, 60, 72, 80, 91, 100];
let filteredArray = array3.filter((value) => value % 10 === 0);
console.log(filteredArray); // [10, 60, 80, 100]

//4) create an array of square of given numbers
let array4 = [1, 2, 3, 4, 5];
let squareArray = array4.map((value) => value * value);
console.log(squareArray); // [1, 4, 9, 16, 25]

//5) using reduce method to multiply all the elements of an array
let arr = [1, 2, 3, 4, 5];
let product = arr.reduce((a,b) => {
    return a * b;
} )
console.log(product); // 120