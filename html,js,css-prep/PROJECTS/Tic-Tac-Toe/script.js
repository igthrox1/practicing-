let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let newMsgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let turnO = true; //playerO playerX
let count = 0;

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        newMsgcontainer.classList.add("hide");
    }
}

const resetGame = () => {
    turnO=true;
    count = 0;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener(("click"),()  =>{
        if(turnO) {
            box.innerText="x";
            turnO = false;
        } else {
            box.innerText = "O"
            turnO=true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

         if (count === 9 && !isWinner) {
            gameDraw();
        }   
       
    })
})

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  newMsgcontainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner} `;
    newMsgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val == pos2val && pos2val == pos3val) {
                showwinner(pos1val);
            }
        }
    }
}

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);