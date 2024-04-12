let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = (Math.random() * 3) + 1;
    computerChoice = Math.floor(computerChoice);

    if(computerChoice === 1) {
        return "rock";
    } else if(computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice() {
    let userChoice = prompt("Type what you want to play: \n'Rock', 'Paper', or 'Scissors'");
    userChoice = userChoice.toLowerCase();

    return userChoice;
}

let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection) {
    // Draw handling
    if(playerSelection == "rock" && computerSelection == "rock") {
        return "Draw! Both players chose rock!";
    } else if(playerSelection == "paper" && computerSelection == "paper") {
        return "Draw! Both players chose paper!";
    } else if(playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw! Both players chose scissors!";
    }

    // User Win Situation
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;

        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    // User Lose Situation
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;

        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    // User Entered Invalid Choice
    else {
        return `User entered invalid choice '${playerSelection}'`;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playerSelection = getUserChoice();
        computerSelection = getComputerChoice();

        alert(playRound(playerSelection, computerSelection));
    }

    let result;

    if(playerScore > computerScore) {
        result = 'The User wins the game of Rock Paper Scissors!';
    } else if(computerScore > playerScore) {
        result = 'The Computer wins the game of Rock Paper Scissors!';
    } else {
        result = 'Draw! Both players tied!';
    }

    alert(`---\nFinal Score: ${playerScore} - ${computerScore}\n${result}`);
}

playGame();