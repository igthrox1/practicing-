/*create a javascript in that generate a random number and store it in variable . 
the program then takes a input from the user to tell them weater the guess was correct,greater or lesser than the 
orginal number.
100(no of guresses) is the  score of user the program is expected to teerminate once the number is guessed the number
should be between 1 to 100 */
    
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;
let guessed = false;

while (!guessed && score > 0) {
    let userGuess = Number(prompt("Guess the number (between 1 and 100): "));
    if (userGuess === randomNumber) {
        alert("Congratulations! You've guessed the number.");
        guessed = true;
    } else if (userGuess < randomNumber) {
        alert("Your guess is too low.");
        score -= 1;
    } else {
        alert("Your guess is too high.");
        score -= 1;
    }
}

if (!guessed) {
    alert("Sorry, you've run out of guesses. The number was " + randomNumber);
}