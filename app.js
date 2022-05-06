const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultsDisplay = document.getElementById('results');
const playerScoreDisplay = document.getElementById('player-score');
const aiScoreDisplay = document.getElementById('ai-score');
let playerChoice = '';
let computerChoice = '';
let playerScore = 1;
let aiScore = 1;

// main app 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playerChoiceDisplay.innerHTML = playerChoice;
        randonComputerChoice();
        compareChoices();
    });
});

// generate random choice for the AI opponent
function randonComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

// compare the player choice to the AI choice and return the result to the DOM
function compareChoices() {
    if (playerChoice === computerChoice) {
    resultsDisplay.innerHTML = "Tie";
    }

    if (playerChoice === "rock" && computerChoice === "paper") {
        resultsDisplay.innerHTML = "You Lost";
        aiScoreDisplay.innerHTML = aiScore ++;
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
        resultsDisplay.innerHTML = "You Win!";
        playerScoreDisplay.innerHTML = playerScore ++;
    }

    if (playerChoice === "paper" && computerChoice === "rock") {
        resultsDisplay.innerHTML = "You Win!";
        playerScoreDisplay.innerHTML = playerScore ++;
    }

    if (playerChoice === "paper" && computerChoice === "scissors") {
        resultsDisplay.innerHTML = "You Lost!";
        aiScoreDisplay.innerHTML = aiScore ++;
    }

    if (playerChoice === "scissors" && computerChoice === "rock") {
        resultsDisplay.innerHTML = "You Lost!";
        aiScoreDisplay.innerHTML = aiScore ++;
    }

    if (playerChoice === "scissors" && computerChoice === "paper") {
        resultsDisplay.innerHTML = "You Win!";
        playerScoreDisplay.innerHTML = playerScore ++;
    }
}