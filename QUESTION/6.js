/* 1) take age from use rand weather he can drive or not 
let age = prompt("Enter your age");
const candrive = (age)=> {
    return age>18?true:false
}
if (candrive(age)){
    alert("yes you can drive")
}
else{
    alert("no you cannot drive")
} ?*/

/*2)in q1 you should be able to ask wherter he wantto try agin or not
let age;
do {
    age = prompt("Enter your age");
    const candrive = (age) => {
        return age > 18 ? true : false
    }
    if (candrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("no you cannot drive")
    }
} while (confirm("Do you want to try again?"));
*/

/*/3) NOW IN QUESTION 2 if the user enters the age in negative or 0 or in characters then it should give an error and ask for the age again
let age;
do {
    age = prompt("Enter your age");
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid positive number for age.");
        continue; // Skip to the next iteration to ask for age again
    }
    const candrive = (age) => {
        return age > 18 ? true : false
    }
    if (candrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("no you cannot drive")
    }
} while (confirm("Do you want to try again?")); */

/*4) now take the input from the user then check if the number is less than 4 then change(redirection) url to google.com if it is 4 then change it to facebook.com if it is greater than 4 then change it to instagram.com
let num = prompt("Enter a number");
if (num >= 4) {
    window.location.href = "https://www.google.com";
}*/

//5)now based on the input of the user change the background color of the page
let color = prompt("Enter a color (red, green, blue):").toLowerCase();
document.body.style.backgroundColor = color;

