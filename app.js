let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".Choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock , paper , scissors
}



const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
     msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate Computer Choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //Draw Condition
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true ;
        }else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice , compChoice)
    }
}; 






Choices.forEach((Choice) => {
    Choice.addEventListener("click",() => {
        const userChoice = Choice.getAttribute("Id");
        playGame(userChoice);

    });
});

