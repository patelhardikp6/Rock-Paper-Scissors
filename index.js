let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        // console.log("Box was clicked",userChoice);
        playGame(userChoice);
    });
});

const genCompChoice = () => {
        let options = ["rock","paper","scissors"];
        const randomIdx = Math.floor(Math.random() * 3 );
        return options[randomIdx];
}

const drawGame = () => {
    // console.log("The Game was draw");
    msg.innerText = "Game Was Draw ! Play Again .";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        // console.log("You Win");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore ++;
        userScorePara.innerText = userScore;
    }
    else{
        // console.log("You Lose");
        msg.innerText = `You Lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore ++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    // console.log("user choic = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

