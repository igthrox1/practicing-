//create a game where the name of game is snake water gun take input from user and computer also
//computer will take random input from the array of 3 values
//snake drink water
//water gun
//gun shoot snake
//print who win the game
//play the game for 10 times and print the score of user and computer
//ask him if he wants to play again or not

let choices = ["stone", "paper", "scissor"];
let userScore = 0;
let computerScore = 0;
let rounds = 1;
let again = true;
let start = confirm("Do you want to play Stone, Paper, Scissor game?");

do{
    let userChoice = prompt("Round " + rounds + ": Enter your choice (stone, paper, scissor):").toLowerCase();
    if (!choices.includes(userChoice)) {
        alert("Invalid choice! Please choose stone, paper, or scissor.");
        continue; // Skip to the next iteration to ask for input again
    }

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    alert("Computer chose: " + computerChoice);

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "stone" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        alert("You win this round!");
        userScore++;
    } else {
        alert("Computer wins this round!");
        computerScore++;
    }
    again=confirm("Do you want to play another round?");
    
    rounds++;
        
    
}while(again)