let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw, please try again!";
    msg.style.backgroundColor = "purple";

    // Reset all circles to transparent
    document.querySelectorAll('.circle').forEach(circle => {
        circle.style.borderColor = "transparent";
    });
};

const showWinner = (userWin, userChoice, compChoice) => {
    const compChoiceElement = document.getElementById(compChoice);
    const compCircle = compChoiceElement.querySelector('.circle');

    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
        // Set the circle to red for the losing choice
        compCircle.style.borderColor = "red";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

        // Set the circle to green for the winning choice
        compCircle.style.borderColor = "green";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice=", userChoice);
    const compChoice = generateComputerChoice();
    console.log("compChoice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorepara.innerText = userScore;
    compScorepara.innerText = compScore;
    msg.innerText = "Play your Move";
    msg.style.backgroundColor = "";

    // Reset circles to transparent
    document.querySelectorAll('.circle').forEach(circle => {
        circle.style.borderColor = "transparent";
    });
};

document.querySelector("#reset-button").addEventListener("click", resetGame);
