let playerScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;

const playerActions = document.querySelectorAll('button');

const headingForPlayerScore = document.querySelector('#player_score');
const headingForComputerScore = document.querySelector('#computer_score');

const resultsSection = document.querySelector('.results')

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

for(let i = 0; i < playerActions.length; i++) {
    playerActions[i].addEventListener('click', function() {
        headingForPlayerScore.innerHTML = playerScore;
        headingForComputerScore.innerHTML = computerScore;

        playerSelection = playerActions[i].innerHTML.toLowerCase();

        computerSelection = getComputerChoice();

        showResult(checkScoreForWinner());
    });
}

function showResult(result) {
    resultsSection.innerHTML = result;
}

function checkScoreForWinner() {
    let result;

    if(playerScore == 5) {
        result = 'The User wins the game of Rock Paper Scissors!';
    } else if(computerScore == 5) {
        result = 'The Computer wins the game of Rock Paper Scissors!';
    } else {
        result = playRound(playerSelection, computerSelection);
    }

    return result;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "rock") {
        return "Draw! Both players chose rock!";
    } else if(playerSelection == "paper" && computerSelection == "paper") {
        return "Draw! Both players chose paper!";
    } else if(playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw! Both players chose scissors!";
    }

    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;

        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;

        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `User entered invalid choice '${playerSelection}'`;
    }
}