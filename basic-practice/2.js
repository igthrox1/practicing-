// 1) check whether the age is between 10 and 20
let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age>10 && age<20) {
    console.log("Your age is between 10 and 20")
}
else {
    console.log("Your age is not between 10 and 20")
}
// 2)use of switch case
switch(age) {
    case 12:
        console.log("Your age is 12")
        break
    case 13:
        console.log("Your age is 13")
        break
    case 14:
        console.log("Your age is 14")
        break
    default:
        console.log("Your age is not 12, 13 or 14")
        break
}

// 3) weather a nuber is divisible by 2 and 3
let num = prompt("Enter a number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0) {
    console.log("Your number is divisible by 2 and 3")
}
else {
    console.log("Your number is not divisible by 2 and 3")
}

// 4) weather a number is either divisible by 2 and 3
let number = prompt("Enter a number")
number = Number.parseInt(number)            
if(number%2==0 || number%3==0) {
    console.log("Your number is either divisible by 2 or 3")
}
else {
    console.log("Your number is not divisible by 2 or 3")
}

// 5) weather you can drive or not based on age using ternary operator
let age1 = prompt("Enter your age")
age1 = Number.parseInt(age1)
age1>=18 ? console.log("You can drive") : console.log("You cannot drive")

