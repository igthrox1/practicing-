
let userScore = 0;
let computerScore = 0;
let name = prompt("plz enter your name ")

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compuScorePara = document.querySelector("#computer-score")
const namee = document.querySelector("#name")
namee.innerText=name;
const draw = (compuChoice) => {
    msg.innerText=`the game was draw play again, computer chose ${compuChoice}`;
    msg.style.backgroundColor="black";
}

const showWinner = async(userWin,userChoice,compuChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText=userScore
        msg.innerText=`you win! your ${userChoice} beats ${compuChoice}` 
        msg.style.backgroundColor="green"
    }else {
        computerScore++
        compuScorePara.innerText=computerScore
        msg.innerText=`you loose! ${compuChoice} beats ${userChoice}` 
        msg.style.backgroundColor="red"
    }
}

const genCompuChoice = () => {
    const options = ["rock","paper","scissors"]
    const randomIdx = Math.floor(Math.random()*3) //here floor means to remove decimal places and *3 means to generate number bw 0 to 2
    return options[randomIdx];

}
const playGame = (userChoice) => {
    const compuChoice = genCompuChoice()

    if (userChoice === compuChoice) {
        draw(compuChoice)
    }else {
        let userWin = true ;
        if(userChoice=="rock") {
            //the computer can either choose paper or scissors
            userWin = compuChoice == "paper" ? false : true;
        }else if (userChoice=="paper") {
            //rock scissor
            userWin = compuChoice == "rock" ? true : false;
        }else{
            //rock paper 
            userWin = compuChoice == "rock" ?  false : true;
        }
        showWinner(userWin,userChoice,compuChoice)
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
}) 