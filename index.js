let computerSelection;
let round = 0;
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let playerSelection;

function getComputerChoice(){
    let temp = Math.floor(Math.random()*10);
    if (temp >= 0 && temp <=2){
        computerSelection = "Rock";
        return;
    } else if (temp > 2 && temp < 6){
        computerSelection = "Paper";
        return;
    } else if (temp >= 6 && temp < 9){
        computerSelection = "Scissors";
        return;
    } else {
        getComputerChoice();
        return;
    }
    
}

function resetCounts(){
    round = 0;
    playerWinCount = 0;
    computerWinCount = 0;
    tieCount = 0;
    playerSelection = "";
};

function getWinner(playerSelection, computerSelection) {
    let temp;
    switch (computerSelection) {
        case "Rock":
            switch (playerSelection) {
                case "Rock":
                    temp="tie";
                    break;
                case "Paper":
                    temp="playerWin";
                    break;
                case "Scissors":
                    temp="computerWin";
                    break;
            }
            break;
        case "Paper":
            switch (playerSelection) {
                case "Rock":
                    temp="computerWin";
                    break;
                case "Paper":
                    temp="tie";
                    break;
                case "Scissors":
                    temp="playerWin"
                    break;
            }
            break;
        case "Scissors" :
            switch (playerSelection) {
                case "Rock":
                    temp="playerWin";
                    break;
                case "Paper":
                    temp="computerWin";
                    break;
                case "Scissors":
                    temp="tie"
                    break;
            }
    }
    switch (temp) {
        case "playerWin":
            roundResultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
            playerWinCount++;
            break;
        case "computerWin":
            roundResultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
            computerWinCount++;
            break;
        case "tie":
            roundResultDiv.textContent = `It was a tie! You both picked ${playerSelection.toLowerCase()}! :-0`;
            tieCount++;
    }
}

function playAgainInquiry() {
    let temp = (prompt("Would you like to play again? yes/no")).toLowerCase();
    temp == "yes" ? game() : console.log("Okay, thanks for playing with me!");

}

function playRound(){
    getComputerChoice();
    getWinner(playerSelection, computerSelection);
}

/// Create elements of the screen to be put in by later function

// Universal Elements;
let body = document.querySelector('body');
const div = document.createElement('div');

// Gameplay Elements:
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
    rockButton.setAttribute('id', 'rockButton');
    paperButton.setAttribute('id', 'paperButton');
    scissorsButton.setAttribute('id', 'scissorsButton');
    rockButton.classList.toggle('button');
    paperButton.classList.toggle('button');
    scissorsButton.classList.toggle('button');
    rockButton.textContent = 'Rock';
    paperButton.textContent = 'Paper'
    scissorsButton.textContent = 'Scissors';
const roundResultDiv = document.createElement('div');
    roundResultDiv.textContent = ``;
const scoreBoard = document.createElement('div');
    scoreBoard.classList.toggle('scoreBoard');
const playerScoreBox = document.createElement('p');
const computerScoreBox = document.createElement('p');
const drawScoreBox = document.createElement('p');

    // Finishing Screen Elements;
const finishingDiv = document.createElement('div');
finishingDiv.classList.toggle('finishDiv');
const playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('id', 'reset');
    playAgainButton.textContent = "Reset?";
const announcer = document.createElement('div');
    announcer.setAttribute('id', 'winner');


function definePlayScreen(){
    if (counter => 0 && counter <=5){
        body.appendChild(div);
        
        div.appendChild(rockButton);
        div.appendChild(paperButton);
        div.appendChild(scissorsButton);

        div.appendChild(roundResultDiv);

        div.appendChild(scoreBoard);
        scoreBoard.appendChild(playerScoreBox);
        scoreBoard.appendChild(computerScoreBox);
        scoreBoard.appendChild(drawScoreBox);

        // Create event listeners for RPS buttons
            const rockEvent = document.querySelector('#rockButton');
            rockEvent.onclick = () => {
                playerSelection = 'Rock';
                round++;
                playRound();
                roundCheck();
            };
            const paperEvent = document.querySelector('#paperButton');
            paperEvent.onclick = () => {
                playerSelection= "Paper";
                round++;
                playRound();
                roundCheck();
            }
            const scissorsEvent = document.querySelector('#scissorsButton');
            scissorsEvent.onclick = () => {
                playerSelection= "Scissors";
                round++;
                playRound();
                roundCheck();
            }
        }
        }

// removes the DOM elements of the game and replaces them with 
function loadFinishingScreen(){
    body.appendChild(finishingDiv);
    if (playerWinCount > computerWinCount) {
        announcer.textContent = `You win!`;
    } else {
        announcer.textContent = `The computer wins!`;
    }
    finishingDiv.appendChild(announcer);
    finishingDiv.appendChild(scoreBoard);
    finishingDiv.appendChild(playAgainButton);
    const reset = document.querySelector('#reset');
reset.onclick = () => {
    resetCounts();
    roundCheck();
    body.removeChild(finishingDiv);
    setScoreBoardNums();
    roundResultDiv.textContent = "";
    definePlayScreen();
};

}

function setScoreBoardNums() {
    playerScoreBox.textContent = `Your Score: ${playerWinCount}`;
    computerScoreBox.textContent = `Computer's Score: ${computerWinCount}`;
    drawScoreBox.textContent = `Number of Ties: ${tieCount}`;
}

// This function controls the DOM manipulation between regular rounds, and the end
function roundCheck() {
    if (round == 0){
        definePlayScreen();
    } else if (playerWinCount >= 5){
        body.removeChild(div);
        loadFinishingScreen();
        console.log('plyaer wins!')
        //set finishing screen to display player wins info
    } else if (computerWinCount >= 5) {
        body.removeChild(div);
        loadFinishingScreen();
        console.log('computer wins!')
        // set finishing screen to display computer wins info
    } else {
        setScoreBoardNums();
    }
}


resetCounts();
roundCheck();