// constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// get DOM elements
const userOptionButtons = document.querySelectorAll(".user-choice");
const restartButton = document.querySelector(".btn-restart");
const resultLabel = document.querySelector(".round-result");
const playerScoreLabel = document.querySelector(".player-score");
const computerScoreLabel = document.querySelector(".computer-score");
const overlay = document.querySelector('.overlay');
const messageBox = document.querySelector('.message-box');

let playerScore = 0;
let computerScore = 0;

userOptionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let playerPick = event.target.classList[1];
        let computerPick = getComputerPlay();
        let roundResult = getRoundResult(playerPick, computerPick);
        updateResult(roundResult);
    });
});

function updateResult(roundResult) {
    if (roundResult === "Computer Wins!") computerScore++;
    else if(roundResult === "Player Wins!") playerScore++;
    playerScoreLabel.textContent = playerScore;
    computerScoreLabel.textContent = computerScore;
    resultLabel.textContent = roundResult;
    resultLabel.style.display = "block";
    checkGameState();
}

function checkGameState() {
    if (playerScore >= 5 || computerScore >= 5) {
        overlay.classList.toggle("active");
        messageBox.classList.toggle("active");
        return
    }
}

function getComputerPlay() {
    const options = [ROCK, PAPER, SCISSORS];
    return options[Math.floor(Math.random() * options.length)];
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection === ROCK) {
        return computerSelection === PAPER ? "Computer Wins!" 
        : computerSelection === SCISSORS ? "Player Wins!" 
        : "Tie";
    } else if (playerSelection === PAPER) {
        return computerSelection === SCISSORS ? "Computer Wins!" 
        : computerSelection === ROCK ? "Player Wins!" 
        : "Tie";
    } else if (playerSelection === SCISSORS) {
        return computerSelection === ROCK ? "Computer Wins!" 
        : computerSelection === PAPER ? "Player Wins!"
        : "Tie";
    }
}

restartButton.addEventListener("click", () => {
    restartGame();
});

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.textContent = playerScore;
    computerScoreLabel.textContent = computerScore;
    resultLabel.style.display = "none";
    overlay.classList.toggle("active");
    messageBox.classList.toggle("active");
}