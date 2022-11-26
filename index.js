let computerSelection;
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

let playerSelection;
function getPlayerSelection(){
    temp = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    if (temp == "rock") {
        playerSelection = "Rock";
        return;
    } else if (temp == "paper") {
        playerSelection = "Paper";
        return;
    } else if (temp == "scissors") {
        playerSelection = "Scissors";
        return;
    } else {
        console.log("That's not an option!  Try again:");
        getPlayerSelection();
    }
}

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
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
            console.log(`You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`);
            playerWinCount++;
            break;
        case "computerWin":
            console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
            computerWinCount++;
            break;
        case "tie":
            console.log(`It was a tie! You both picked ${playerSelection.toLowerCase()}! :-0`)
            tieCount++;
    }
}

function playAgainInquiry() {
    let temp = (prompt("Would you like to play again? yes/no")).toLowerCase();
    temp == "yes" ? game() : console.log("Okay, thanks for playing with me!");

}

function playRound(){
    getPlayerSelection();
    getComputerChoice();
    getWinner(playerSelection, computerSelection);
}

// RPS Challenge ONe - make a function that plays five rounds:
/*
function game(){
    tieCount = 0;
    playerWinCount = 0;
    computerWinCount = 0;
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(`Current Scores:
        Player: ${playerWinCount}
        Computer: ${computerWinCount}
        Ties: ${tieCount}`)
    }
    playerWinCount > computerWinCount ? console.log(`You win!  You beat the computer ${playerWinCount} to ${computerWinCount}!`)
        : computerWinCount > playerWinCount ? console.log(`The computer wins!  It beat you ${computerWinCount} to ${playerWinCount}!`)
        : console.log(`It was a tie! You both won ${playerWinCount} times!
        Guess you'll have to play again!`)
    playAgainInquiry()
}

game();

*/
